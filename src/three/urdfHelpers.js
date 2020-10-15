import { quat } from 'gl-matrix';
import { Joint, DOF } from '../core/Joint.js';
import { Link } from '../core/Link.js';

const tempVec = new Float64Array( 3 );
const tempVec2 = new Float64Array( 3 );

export function urdfRobotToIKRoot( urdfNode, isRoot = true ) {

	let rootNode = null;
	let node;
	if ( urdfNode.isURDFRobot ) {

		rootNode = new Joint();
		rootNode.name = '__world_joint__';
		rootNode.setDoF( DOF.X, DOF.Y, DOF.Z, DOF.EX, DOF.EY, DOF.EZ );

		node = new Link();
		node.name = urdfNode.name;

		rootNode.addChild( node );

	} else if ( urdfNode.isURDFLink ) {

		node = new Link();
		node.name = urdfNode.name;

	} else if ( urdfNode.isURDFJoint ) {

		rootNode = new Joint();

		if ( urdfNode.jointType === 'revolute' || urdfNode.jointType === 'continuous' ) {

			const link = new Link();
			rootNode.addChild( link );

			const joint = new Joint();
			joint.name = urdfNode.name;
			link.addChild( joint );

			const fixedLink = new Link();
			joint.addChild( fixedLink );

			const fixedJoint = new Joint();
			fixedLink.addChild( fixedJoint );

			tempVec[ 0 ] = 0;
			tempVec[ 1 ] = 0;
			tempVec[ 2 ] = 1;

			tempVec2[ 0 ] = urdfNode.axis.x;
			tempVec2[ 1 ] = urdfNode.axis.y;
			tempVec2[ 2 ] = urdfNode.axis.z;

			// orient the joint such that +Z is pointing down the URDF rotation axis
			quat.rotationTo( joint.quaternion, tempVec, tempVec2 );
			quat.invert( fixedJoint.quaternion, joint.quaternion );
			joint.setMatrixNeedsUpdate();
			fixedJoint.setMatrixNeedsUpdate();

			joint.setDoF( DOF.EZ );
			joint.setMinLimits( urdfNode.limit.lower );
			joint.setMaxLimits( urdfNode.limit.upper );

			node = fixedJoint;

		} else {

			node = rootNode;

		}

	} else {

		return null;

	}

	// don't position the urdf root because we're treating the positions at
	// degrees of freedom
	if ( ! isRoot ) {

		( rootNode || node )
			.setPosition(
				urdfNode.position.x,
				urdfNode.position.y,
				urdfNode.position.z,
			);

		( rootNode || node )
			.setQuaternion(
				urdfNode.quaternion.x,
				urdfNode.quaternion.y,
				urdfNode.quaternion.z,
				urdfNode.quaternion.w,
			);

	}

	const children = urdfNode.children;
	for ( let i = 0, l = children.length; i < l; i ++ ) {

		const res = urdfRobotToIKRoot( children[ i ], false );

		if ( res ) {

			node.addChild( res );

		}

	}

	return rootNode || node;

}

export function setIKFromUrdf( ikRoot, urdfRoot ) {

	ikRoot.setDoFValue( DOF.X, urdfRoot.position.x );
	ikRoot.setDoFValue( DOF.Y, urdfRoot.position.y );
	ikRoot.setDoFValue( DOF.Z, urdfRoot.position.z );

	ikRoot.setDoFQuaternion(
		urdfRoot.quaternion.x,
		urdfRoot.quaternion.y,
		urdfRoot.quaternion.z,
		urdfRoot.quaternion.w,
	);

	ikRoot.traverse( c => {

		if ( c.isJoint ) {

			const name = c.name;
			if ( name in urdfRoot.joints ) {

				c.setDoFValues( urdfRoot.joints[ name ].angle );

			}

		}

	} );

}

export function setUrdfFromIK( urdfRoot, ikRoot ) {

	ikRoot.updateMatrixWorld();
	urdfRoot.matrix.set( ...ikRoot.matrixWorld ).transpose();
	urdfRoot.matrix.decompose(
		urdfRoot.position,
		urdfRoot.quaternion,
		urdfRoot.scale,
	);

	// urdfRoot.position.set(
	// 	ikRoot.getDoFValue( DOF.X ),
	// 	ikRoot.getDoFValue( DOF.Y ),
	// 	ikRoot.getDoFValue( DOF.Z ),
	// );
	// urdfRoot.rotation.set(
	// 	ikRoot.getDoFValue( DOF.EX ),
	// 	ikRoot.getDoFValue( DOF.EY ),
	// 	ikRoot.getDoFValue( DOF.EZ ),
	// );

	ikRoot.traverse( c => {

		if ( c.isJoint ) {

			const ikJoint = c;
			const urdfJoint = urdfRoot.joints[ c.name ];
			if ( urdfJoint ) {

				urdfJoint.setOffset( ikJoint.getDoFValue( DOF.EZ ) );

			}

		}

	} );

}
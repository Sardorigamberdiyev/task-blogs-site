const { join, delimiter } = require('path');
const { exec } = require('shelljs');
const { rimrafSync } = require('rimraf');
const { mkdirSync, readdirSync } = require('fs');

process.env.PATH += delimiter + join(process.cwd(), 'node_modules', '.bin');

const PROTO_SERVICE_DIR = join(__dirname, '../src/grpc/protos');
const PROTOC_GEN_TS_PATH = join(__dirname, '../node_modules/.bin/protoc-gen-ts');

const services = readdirSync(PROTO_SERVICE_DIR, { withFileTypes: true }).filter((el) =>
	el.isDirectory()
);

services.forEach(async (s) => {
	const PROTO_DIR = join(__dirname, '../src/grpc/protos/' + s.name);
	const MODEL_DIR = join(__dirname, '../src/grpc/genproto/' + s.name);

	rimrafSync(MODEL_DIR);
	mkdirSync(MODEL_DIR);

	const protoConfig = [
		`--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" `,
		`--grpc_out="grpc_js:${MODEL_DIR}" `,
		`--js_out="import_style=commonjs,binary:${MODEL_DIR}" `,
		`--ts_out="grpc_js:${MODEL_DIR}" `,
		`--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto`,
	];

	exec(`grpc_tools_node_protoc ${protoConfig.join(' ')}`);
});

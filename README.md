# grpc_web_fronted_proxy_backend_test

npm install
----------------------------
if xxxx_pb.js doesnt exist,generate it with: 
protoc helloworld.proto  --js_out=import_style=commonjs:. 
 --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
 
 and copy protos xxxpb.js files to services grpc_react_test/src/services/reqres/grpc/
--------------------------
docker login 
docker compose up

cd grpc_react_test
npm install
npm run build
open build/index.hmtl with live server

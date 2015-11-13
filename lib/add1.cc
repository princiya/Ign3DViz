#include <node.h>

#include <v8.h>

using namespace v8;

Handle<Value> Add(const Arguments& args) {
  HandleScope scope;
  
  double value = args[0]->NumberValue() + args[1]->NumberValue();
  Local<Number> num = Number::New(value);

  return scope.Close(num);
}

void Init(Local<Object> target) {
  target->Set(String::NewSymbol("Add"),
        FunctionTemplate::New(Add)->GetFunction());
}

NODE_MODULE(add1, Init)


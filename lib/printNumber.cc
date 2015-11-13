#include <node.h>

#include <v8.h>

using namespace v8;

Handle<Value> Print(const Arguments& args) {
  HandleScope scope;
  
  double value = args[0]->NumberValue() + 1;
  Local<Number> num = Number::New(value);

  return scope.Close(num);
}

void Init(Local<Object> target) {
  target->Set(String::NewSymbol("Print"),
        FunctionTemplate::New(Print)->GetFunction());
}

NODE_MODULE(printNumber, Init)


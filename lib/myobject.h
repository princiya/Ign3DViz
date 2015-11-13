#ifndef MYOBJECT_H
#define MYOBJECT_H

#include <node.h>
#include <node_object_wrap.h>

namespace demo {

class MyObject : public node::ObjectWrap {
 public:
  static void Init(v8::Local<v8::Object> exports);

 private:
  explicit MyObject(double value = 0);
  ~MyObject();

  static int staticValue;
  static void New();
  static void PlusOne();
  static v8::Persistent<v8::Function> constructor;
  double value_;
};

}  // namespace demo

#endif
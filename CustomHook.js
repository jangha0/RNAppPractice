import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const InputBox = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        Value={props.value}
        onChangeText={props.onChangeText}
        style={{ borderBottomWidth: 1, width: 200 }}
        placeholder={props.placeholder}
      />
      <Button title="초기화" onProgress={props.onReset} />
    </View>
  );
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const resetValue = () => setValue(initialValue);
  return {
    value,
    setValue,
    resetValue,
  };
};

const CustomHook = () => {
  // const output = useInput(""); 1
  // const name = output.value; 2
  // const setName = output.setValue; 3
  // const resetName = out.resetValue; 4
  // const { value: name, setValue: sestName, resetValue: resetName } = output; 5
  ///2,3,4를 합친 것이 5. 1과 5를 합친 것이 다음: 36~46
  const {
    value: name,
    setValue: setName,
    resetValue: resetName,
  } = useInput("");
  const { value: age, etValue: setAge, resetValue: resetAge } = useInput("");
  const {
    value: city,
    setValue: setCity,
    resetValue: resetCity,
  } = useInput("");

  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [city, setCity] = useState("");

  return (
    <View>
      <InputBox
        value={name}
        onChangeText={setName}
        placeholder="이름을 입력해 주세요"
        onReset={resetName}
      />
      <InputBox
        value={age}
        onChangeText={setAge}
        placeholder="나이를 입력해 주세요"
        onReset={resetAge}
      />
      <InputBox
        value={city}
        onChangeText={setCity}
        placeholder="사는 곳을 입력해 주세요"
        onReset={resetCity}
      />

      {/* <View style={{ flexDirection: "row" }}>
        <TextInput
          Value={name}
          onChangeText={setName}
          style={{ borderBottomWidth: 1, width: 200 }}
          placeholder="나이를 입력해주세요"
        />
        <Button title="초기화" onProgress={() => setName("")} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          Value={age}
          onChangeText={setAge}
          style={{ borderBottomWidth: 1, width: 200 }}
          placeholder="나이를 입력해주세요"
        />
        <Button title="초기화" onProgress={() => setName("")} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          Value={city}
          onChangeText={setCity}
          style={{ borderBottomWidth: 1, width: 200 }}
          placeholder="사는 곳을 입력해주세요"
        />
        <Button title="초기화" onProgress={() => setName("")} />
      </View> */}
    </View>
  );
};

export default CustomHook;

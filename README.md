# 원티드 프리온보딩

### 배포 주소

[https://preonboard-spacebelt.netlify.app/](https://preonboard-spacebelt.netlify.app/)

---

## 1. Toggle

![toggle](https://user-images.githubusercontent.com/82592845/153044360-8a71fdda-fc02-4737-8cab-6b34d81197eb.gif)

### 구현 과정

1. input , label 태그를 이용하여 input은 hidden 처리 후 label의 ::before, ::after를 이용해서 버튼 모양을 만들었다..
2. 움직임은 input의 checkbox 타입의 checked 속성을 이용하여 transition을 줬다.
3. 아래의 ON/OFF 글은 onClick이벤트가 발생했을때 useState를 이용하여 true || false 값을 이용하여 지정되도록 했다.

---

## 2. Modal

![modal](https://user-images.githubusercontent.com/82592845/153044347-851fdc85-1f2c-4f63-b45e-6ae3c12e110f.gif)

### 구현 과정

1. useState로 버튼 클릭 시 true || false 값을 가지게 하여 true시에는 Modal창이 보이도록 false시에는 보이지 않도록 했다.

---

## 3. Tab

![tab](https://user-images.githubusercontent.com/82592845/153044352-4e3af1ed-dfec-4faf-872e-498577e368c3.gif)

### 구현 과정

1. 간단한 MOCK DATA를 생성해서 사용했다

   ```jsx
   const navBars = [
     { nav: "Tab1", text: "Tab menu ONE" },
     { nav: "Tab2", text: "Tab menu TWO" },
     { nav: "Tab3", text: "Tab menu THREE" },
   ];
   ```

2. navBars 를 map을 이용하여 index와 함께 뿌려줬다.
3. useState를 사용, onClick이벤트가 발생하면 index number가 지정되게 했다.
4. 지정된 index와 onClick이벤트가 발생한 div의 index가 같으면 class를 부여하여 transition을 줬다.

---

## 4. Tag

![tag](https://user-images.githubusercontent.com/82592845/153044354-e1129ef7-695f-4054-9aed-9202ec1abc4c.gif)

### 구현 과정

1. form이 submit되면 {id: 0, text: 바다} 형식의 tags가 생성되도록 하며, ref를 이용하여 해당 dom의 value를 초기화한다.

   ```jsx
   const [tags, setTags] = useState([]);
   const handleSubmit = (e) => {
     e.preventDefault();
     const newId = tags.length === 0 ? 0 : tags[tags.length - 1]["id"] + 1;
     const newTags = [...tags, { id: newId, text: e.target[0].value }];
     setTags(newTags);
     console.log(inputRef.current.value);
     inputRef.current.value = "";
   };
   ```

2. 만들어진 tags를 map을 사용하여 뿌려준다.
3. x 버튼을 누르면 filter를 사용하여 해당요소를 제외해준다.

---

## 5. AutoComplete

![autoComplete](https://user-images.githubusercontent.com/82592845/153044328-c9083eeb-d20a-408f-a3cc-15ed2746e594.gif)

### 구현 과정

1. input에 입력되는 값을 useState를 이용하여 담는다.
2. 담겨지는 값을 filter와 정규표현식을 사용하여 filter된 값을 다른 useState를 이용하여 담는다.
3. map을 이용하여 검색된 값들을 뿌려준다.

---

## 6. ClickToEdit

![clickToEdit](https://user-images.githubusercontent.com/82592845/153044339-ec2e657f-e836-4dc9-8be0-a126dc904ba3.gif)

### 구현 과정

1. focus되기 전에는 input이 아닌것 같아 onClick이벤트가 발생하면 true || false 값을 가지는 state를 이용하여 true면 label, input이 false면 div가 나오도록 component화 해서 분리 했다.
2. 보여질 이름 또는 나이를 변경시키는 handleValue 함수를 prop으로 전달했다.
3. 분리한 컴포넌트에 임시로 값을 저장해 줄 state를 생성하고, input에 onChange, onKeyUp이벤트를 이용하여 입력된 값을 생성한 state에 담은 후, onBlur 이벤트가 발생하면 handleValue 함수를 사용해 보여질 이름과 나이를 변경하게 되도록 했다.

### 어려웠던 점

1. 컴포넌트를 분리하는데 시간이 꽤 오래걸렸었다.
2. ref를 이용해 focus를 거는 과정에서 헤맸다.
   - 컴포넌트화 하고 Ref를 사용하는 과정, useEffect를 이용하여 inputRef.current.focus() 를 하는 과정에서 난항을 겪었다.

---

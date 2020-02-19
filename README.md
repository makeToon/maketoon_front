# MakeToon - FrontEnd

## Technical Stack

- TypeScript
- React / Redux + middleware
- Styled-Components
- Webpack v4

## styled-components naming convention

`styled-components`를 사용하기 때문에 컴포넌트의 네이밍에 관해서 정의를 내립니다.

1. `<Wrapper>`
   가장 부모태그에 적용시키는 Naming. 일반적으로 가장 큰 컴포넌트(`container`)를 감싸거나 의미적으로 가장 큰 컴포넌트일때 사용.

2. `<StyledComponentName>`
   css 태그를 사용하여 하나의 `Component`에 자식으로 사용. 이와 같이 작성함.

   ```javascript
   const Component = styled.div`
     > div {
       border: 1px solid black;
     }
   `;
   ```

3. `<[TagName|FunctionName]>`
   단지 `HTML태그` 또는 `기능`을 표현하기 위해 사용. 예를 들어 만약 `input`태그의 `border`를 제거하고 싶을 때 이와 같이 작성함.
   ```javascript
   const Input = styled.input`
     border: none;
   `;
   ```
   public한 태그를 작성하는 경우에 해당함.

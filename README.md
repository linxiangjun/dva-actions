Usage

```js
import { connect } from 'dva'
import { connectActions } from 'dva-actions'

class Data extends React.Component{
  ...
}

export default connect(({ dataModels }: ConnectState) => ({
  ...
}))(connectActions(Data, {
    dataModels: [...],
  }))
```

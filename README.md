# Local State Hoc

```
import {connect} from 'react-redux'
import {withLocalState} from 'local-state-hoc'

const View = ({ updateIndex, index }) => (
  <div>
    <button onClick={updateIndex} />
    <p>{index}</p>
  </div>
)

const defaultLocalState = {
  index: 0
}

const mapStateToProps = (_, { localState = defaultLocalState, setLocalState }) => ({
  updateIndex: () => setLocalState({ index: localState.index + 1 }),
  index: localState.index
})

export default withLocalState(connect(mapStateToProps)(View))
```

export default function testReducer(state:number = 0, action:any) {
  switch (action.type) {
    case 'TEST_ACTION':
      return {
        test: 'test'
      };
    default:
      return state;
  }
}   
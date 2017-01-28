'use strict';

class RecentKeywords extends React.Component {
  constructor(props){
    super(props);
    // this.state = {idx: 0, data: [{id: 0, keyword: '', searches: 0, awcpc: 0, _10V: 0 }] };
  }

  // _onDataChange(data){
  //   this.setState({data: data});
  // }
  //
  // getData(){
  //   const _updateData = this._onDataChange.bind(this);
  //   getRecentKeywords(_updateData);
  // }
  //
  // componentDidMount(){
  //   this.getData();
  //   let cycleTimeout = this.cycle.bind(this);
  //   // this.interval = setInterval(cycleTimeout, 2000);
  // }

  // componentWillUnmount(){
  //   const interval = this.interval;
  //   clearInterval(interval);
  // }

  // cycle(){
  //   let idx = this.state.idx;
  //   let cyc_length = this.state.data.length;
  //   let newIdx = (idx + 1) % cyc_length;
  //   this.setState({ idx: newIdx });
  // }

  render(){
    // const displayData = this.state.data[this.state.idx];
    const keywordList = this.props.data.map( (keyword, idx) => {
      return <RecentKeywordRow rowData={keyword} key={idx} />
    });
    return (
      <div className='recent-keywords-container'>
        <div className='recent-keywords-row top'>
          <div className='rkw id'>ID</div>
          <div className='rkw keyword'>Keyword</div>
          <div className='rkw searches'>Searches</div>
          <div className='rkw awcpc'>AWCPC</div>
          <div className='rkw tenV'>#10V</div>
        </div>
        {keywordList}
      </div>
    )
  }
}

const RecentKeywordRow = ({rowData}) => {
  return (
    <div className='recent-keywords-row bottom'>
      <div className='rkw id'>{rowData.id}</div>
      <div className='rkw keyword'>{rowData.keyword}</div>
      <div className='rkw searches'>{rowData.searches}</div>
      <div className='rkw awcpc'>{dollarFormat(rowData.awcpc, true)}</div>
      <div className='rkw tenV'>{dollarFormat(rowData._10V)}</div>
    </div>
  );
}

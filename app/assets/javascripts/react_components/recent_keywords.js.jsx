'use strict';

class RecentKeywords extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
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

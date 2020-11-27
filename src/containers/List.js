import React from 'react';
import BigText from '../components/BigText';
const databaseURL = "https://bnbd-react.firebaseio.com/";


class List extends React.Component  {
  constructor() {
        super();
        this.state = {
            toss_donbox: {}
        };
    }

    _get() {
        fetch(`${databaseURL}/toss_donbox.json`).then(res => {
            if(res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(toss_donbox => this.setState({toss_donbox: toss_donbox}));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.toss_donbox != this.state.toss_donbox
    }

    componentDidMount() {
        this._get();
    }

    render() {
        return (	
				<div class="container">
								<table>
									<thead>
										<th>순번</th>
										<th>링크</th>
										<th>등록일</th>
										<th>조회수</th>
									</thead>
									<tbody>
					{Object.keys(this.state.toss_donbox).map(id => {
						const toss_donbox = this.state.toss_donbox[id];
						return (					
									<tr>
										<td>
											{id}
										</td>
										<td>
											{toss_donbox.link}
										</td>
										<td>
											{toss_donbox.regdate}
										</td>
										<td>
											{toss_donbox.read_cnt}
										</td>
									</tr>
						);
					})}								
									</tbody>
								</table>
				</div>

        );
    }
}

export default List;

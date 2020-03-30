import React, { Component } from 'react';
import '../../App.css'
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';

class PhoneBookApp extends Component {
    id = 2
    state = {
      information: [
        {
          id: 0,
          name: '홍길동',
          phone: '010-5555-6666'
        },
        {
          id: 1,
          name: '홍진호',
          phone: '010-2222-2222'
        }
      ],
      keyword: ''
    }
    
    handleCreate = data => {
      //console.log(data);
      const {information} = this.state;
      this.setState({
        information: information.concat({id: this.id++, ...data})
      });
    }
  
    handleRemove = id => {
      const {information} = this.state;
      this.setState({
        information: information.filter(info => info.id !== id)
      });
    }
  
    handleUpdate = (id, data) => {
      const {information} = this.state;
      this.setState({
        information: information.map(
          info => id === info.id ? {...info, ...data} : info
        )
      });
    }
  
    handleChange = e => {
      this.setState({
        keyword: e.target.value,
      });
    }

    render() {
        const filteredList = this.state.information.filter(info => info.name.indexOf(this.state.keyword) !== -1);

        return (
          <div className="App">
            <header className="App-header">
              <PhoneForm 
              onCreate={this.handleCreate}
              />
              <div>
              <input
                  placeholder="검색 할 이름을 입력하세요."
                  onChange={this.handleChange}
                  value={this.state.keyword}
              />
              </div>
              <PhoneInfoList 
              // data={this.state.information}
              data={filteredList}
              onRemove={this.handleRemove}
              onUpdate={this.handleUpdate}
              />
              <div>{/* JSON.stringify(this.state.information) */}</div>
            </header>
          </div>
        );
    }
}

export default PhoneBookApp;
import React from 'react';

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import './MainPage.css';

import GameSection from '../sections/GameSection';
import EditorSection from '../sections/EditorSection';
import ConsoleSection from '../sections/ConsoleSection';


class MainPage extends React.Component {
  render() {
    return (
      <div style={{flex: 1, height:"100vh"}}>
        <Row type="flex" className="container">
          <Col span={12}>
            <Row type="flex" className="gameSection">
              {/* TODO: Insert Game Here*/}
              <GameSection />
            </Row>
            <Row type="flex" className="consoleSection">
              {/* TODO: Insert Console Here*/}
              <ConsoleSection />
            </Row>
          </Col>
          <Col span={12}>
            <Row type="flex" className="editorSection">
              {/* TODO: Insert Editor Here*/}
              <EditorSection />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MainPage;

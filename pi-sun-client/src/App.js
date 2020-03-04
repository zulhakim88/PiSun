import React, {useCallback, useState} from 'react';
import {Row, Col, Layout, Typography, Input, Button} from 'antd';
import './App.css';
import CalculatorService from "./services/CalculatorService";

const { Header, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const style1 = { padding: '40px 0 40px 40px' };
const style2 = { padding: '40px 40px 40px 0' };
const style3 = { padding: '40px 0 0' };

function App() {

  const [pi, setPi] = useState("0");
  const [circumference, setCircumference] = useState("0");
  const [decimalLength, setDecimalLength] = useState("");
  const [isSubmit1, setIsSubmit1] = useState(false);
  const [isSubmit2, setIsSubmit2] = useState(false);

  const calculate = useCallback(async () => {
    setIsSubmit2(true);
    setDecimalLength("");
    try {
      const res = await CalculatorService.getSunCircumference();
      setPi(res.pi);
      setCircumference(res.sunCircumference);
      console.log(res);
      setIsSubmit2(false);
    } catch (e) {
      console.log(e);
      setIsSubmit2(false);
    }
  }, []);

  const calculateWithSpecifiedLength = useCallback(async () => {
    setIsSubmit1(true);
    if (!decimalLength) {
      setIsSubmit1(false);
      return;
    }
    if(decimalLength > 15) {
      alert("There's no value in in calculating with PI decimals more than 15.");
      setIsSubmit1(false);
      return;
    }
    try {
      const res = await CalculatorService.getSunCircumferenceWithPILength(decimalLength);
      setPi(res.pi);
      setCircumference(res.sunCircumference);
      setIsSubmit1(false);
      console.log(res);
    } catch (e) {
      console.log(e);
      setIsSubmit1(false);
    }
  }, [decimalLength]);

  const reset = useCallback(async () => {
    try {
      await CalculatorService.reset();
      setPi("0");
      setCircumference("0");
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="App">
      <Layout>
        <Header>
          <Title level={2} style={{ color: '#FFFFFF', paddingTop: '10px'}}>The Sun's circumference calculator!</Title>
        </Header>
        <Layout>
          <Content>
            <div style={{ height: '100%' }}>
              <Row gutter={16}>
                <Col className="gutter-row" span={24}>
                  <div style={style3}>
                    <Paragraph>
                      If you wish to calculate the circumference to the Nth decimal precision of PI, it can be done here:
                      <Input
                          style={{ marginLeft: '10px', maxWidth: '250px'}}
                          placeholder="Number of PI decimal..."
                          value={decimalLength}
                          onChange={e => setDecimalLength(e.target.value)}
                      />
                      <Button type="primary" style={{ marginLeft: '10px'}} onClick={calculateWithSpecifiedLength} loading={isSubmit1}>
                        Calculate!
                      </Button>
                    </Paragraph>
                    <Title level={2}>
                      OR
                    </Title>
                    <Paragraph style={{ marginTop: '50px'}}>
                      You can just calculate with the auto generated PI which increases in precision each time you hit the 'Calculate Manually!' button.
                    </Paragraph>
                  </div>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col className="gutter-row" span={24}>
                  <div style={style3}>
                    <Button type="primary" size="large" style={{ marginRight: '10px'}} onClick={calculate} loading={isSubmit2}>Calculate Manually!</Button>
                    <Button size="large" style={{ marginLeft: '10px'}} onClick={reset}>Reset</Button>
                  </div>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                  <div style={ {...style1, position: 'relative'}}>
                    <Title level={3}>Pi:</Title>
                    <Text type="secondary" style={{ position: 'absolute', zIndex: '1', top: '62px', right: '0'}}>Pi decimal length: {pi.substring(2).length}</Text>
                    <TextArea value={pi} rows={10} autoSize={{ minRows: 10 }} disabled onChange={e => setPi(e.target.value)} />
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div style={style2}>
                    <Title level={3}>The Sun's Circumference:</Title>
                    <TextArea value={circumference} rows={10} autoSize={{ minRows: 10 }} disabled onChange={e => setCircumference(e.target.value)}/>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

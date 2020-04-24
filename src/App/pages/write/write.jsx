import React from 'react';
import './write.less';
import { Row, Col, Tabs, Button, Popover, Input, Form, Empty, Table, Menu, Dropdown  } from 'antd';
import {
    PlusOutlined,
    SettingOutlined,
    DeleteOutlined,
    CloudUploadOutlined
} from '@ant-design/icons';

import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';

import API from '../../../common/api/api';

const { TabPane } = Tabs;
class write extends React.Component {
    mdParser = null
    constructor(props) {
        super(props)
        this.mdParser = new MarkdownIt(/* Markdown-it options */)
        this.state = {
            activeKey: '',
            anthologyName: '',
            anthologyList: [],
            anthologyError: {},

            visible: false,
            columns: [
                {
                    title: '标题',
                    key: 'articleName',
                    dataIndex:'articleName',
                    ellipsis: true,
                },
                {
                    title: 'Action',
                    key: 'Action',
                    dataIndex:'id',
                    width: 45,
                    render: (text,record) => {
                        return <Dropdown
                            placement="bottomRight"
                            overlay={
                                (<Menu>
                                    <Menu.Item>
                                        <DeleteOutlined />
                                        <span  onClick={()=>this.deleteArt(text,record)}>删除</span>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <CloudUploadOutlined />
                                        <span>发布</span>
                                    </Menu.Item>
                                </Menu>)
                            }
                            trigger="click"
                            arrowPointAtCenter
                        >
                            <SettingOutlined />
                        </Dropdown>
                    }
                }
            ],
            articleList: [],

            selectedRowKeys: [],
            articleText: ''
        };
    }

    componentDidMount() {
        this.getAnth();
    }

    handleEditorChange = ({ html, text }) => {
        console.log('handleEditorChange', html, text)
        this.setState({
            articleText: text
        })
    }
    onChange = activeKey => {
        this.getArt(activeKey)
        this.setState({ activeKey });
    };
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    add = () => {
        const { anthologyName } = this.state;
        if (!anthologyName) {
            this.setState({
                anthologyError: {
                    validateStatus: 'error'
                }
            })
            return;
        }
        API.user_api.addAnthology(anthologyName, res => {
            if (res.code === 0) {
                this.getAnth();
            }
        })
        this.setState({
            visible: false,
            anthologyError: {}
        });
    };
    remove = targetKey => {
        API.user_api.deleteAnthology(targetKey, res => {
            this.getAnth()
        })
    };
    handleVisibleChange = visible => {
        this.setState({ visible });
    };
    handleAnthologyNameChange = e => {
        this.setState({
            anthologyName: e.target.value
        })
    }
    getAnth = () => {
        API.user_api.getAnthology(res => {
            if (res.code === 0) {
                let anthologyList = res.anthologyList.map((item, i) => {
                    if (i === 0) {
                        item.closable = false;
                    }
                    item.id = item.id.toString();
                    return item
                });
                let activeKey = anthologyList[0].id;
                this.setState({
                    activeKey: activeKey,
                    anthologyList: anthologyList
                })
                this.getArt(activeKey);
            }
        })
    }

    addArt = () => {
        let artInfo = {
            anthologyId: this.state.activeKey,
            articleName: new Date().toLocaleString()
        }
        API.user_api.addArticle(artInfo, res => {
            if (res.code === 0) {
                this.getArt(this.state.activeKey);
            }
        })
    }

    getArt = (activeKey) => {
        API.user_api.getArticle(activeKey, res => {
            if (res.code === 0) {
                let articleList = res.articleList.map((item, i) => {
                    item.key = item.id;
                    return item
                })
                let selectedRowKeys = articleList ? [articleList[0].key] : [];
                this.setState({
                    selectedRowKeys: selectedRowKeys,
                    articleList: articleList
                })
                if (selectedRowKeys) {
                    this.getArtText(selectedRowKeys)
                }
            }
        })
    }
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.getArtText(selectedRowKeys)
    };

    setArt = () => {
        let { articleText, selectedRowKeys } = this.state;
        let artInfo = {
            articleId: selectedRowKeys[0],
            articleText: articleText
        }
        console.log(artInfo)
        API.user_api.setArticleText(artInfo, res => {
            console.log(res)
        })
    }
    getArtText = (selectedRowKeys) => {
        API.user_api.getArticleText(selectedRowKeys[0], res => {
            if (res.code === 0) {
                let text = res.article[0].articleText;
                this.setState({
                    articleText: text ? text : 'Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it.'
                })
            }
        })
        this.setState({ selectedRowKeys });
    }
    deleteArt = (text,record) => {
        API.user_api.deleteArticle(text,res=>{
            console.log(res)
            if(res.code===0){
                this.getArt(this.state.activeKey)
            }
        })
    }
    render() {
        const text = <span>输入名称</span>;
        const content = (
            <Form>
                <Form.Item
                    name="articleName"
                    style={{ marginBottom: '8px' }}
                    {...this.state.anthologyError}
                >
                    <Input placeholder="文集名称" value={this.state.anthologyName} onChange={this.handleAnthologyNameChange} />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '8px' }}
                >
                    <Button onClick={this.add} size="small" type="primary">确定</Button>
                </Form.Item>
            </Form>
        );
        const operations = <Popover
            placement="bottom"
            title={text}
            content={content}
            trigger="click"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
        >
            <Button
                shape="circle"
                icon={<PlusOutlined />}
            >
            </Button>
        </Popover>

        return (
            <div className="write">
                <Row style={{ height: '99%' ,minHeight: '800px'}}>
                    <Col span={6} style={{ height: '100%', position: 'relative', padding: '0 5px' }}>
                        <Tabs
                            onChange={this.onChange}
                            activeKey={this.state.activeKey}
                            type="editable-card"
                            onEdit={this.onEdit}
                            tabBarStyle={{ paddingRight: '8px' }}
                            tabBarExtraContent={operations}
                            hideAdd
                        >
                            {this.state.anthologyList.map(anthology => (
                                <TabPane tab={anthology.anthologyName} key={anthology.id} closable={anthology.closable}>
                                    {this.state.articleList.length > 0
                                        ? (
                                            <Table
                                                columns={this.state.columns}
                                                dataSource={this.state.articleList}
                                                showHeader={false}
                                                rowSelection={{
                                                    type: 'radio',
                                                    selectedRowKeys: this.state.selectedRowKeys,
                                                    onChange: this.onSelectChange
                                                }}>

                                            </Table>
                                        )
                                        : (<Empty
                                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                                            imageStyle={{
                                                height: 60,
                                            }}
                                            description={
                                                <span style={{ color: 'rgba(0,0,0,.25)' }}>
                                                    暂无数据
                                            </span>
                                            }
                                        >
                                            <Button type="primary" onClick={this.addArt}>立即添加</Button>
                                        </Empty>)
                                    }
                                </TabPane>
                            ))}
                        </Tabs>
                        {
                            this.state.articleList.length > 0
                                ? (
                                    <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '0 20px' }} >
                                        <Button
                                            block
                                            type="primary"
                                            style={{ marginBottom: '5px' }}
                                            onClick={this.addArt}>
                                            添加文章
                                        </Button>

                                        <Button
                                            block
                                            style={{ marginBottom: '5px' }}
                                            onClick={this.setArt}>
                                            保存
                                        </Button>

                                        <Button block type="dashed">
                                            返回首页
                                        </Button>
                                    </div>

                                )
                                : ''
                        }
                    </Col>
                    <Col span={18} style={{ background: 'rgba(0,0,0,0.1)' }}>
                        {
                            this.state.selectedRowKeys.length > 0
                                ? <MdEditor
                                    value={this.state.articleText}
                                    renderHTML={(text) => this.mdParser.render(text)}
                                    onChange={this.handleEditorChange}
                                />
                                : <Empty
                                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                                    imageStyle={{
                                        height: 60,
                                    }}
                                    description={
                                        <span style={{ color: 'rgba(0,0,0,.25)' }}>
                                            暂无数据
                                            </span>
                                    }
                                ></Empty>
                        }

                    </Col>
                </Row>
            </div>
        )
    }
}

export default write;
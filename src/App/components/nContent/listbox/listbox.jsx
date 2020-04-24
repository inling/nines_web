import React from 'react';
import './listbox.less';
import { List, Button, Skeleton } from 'antd';
import {Link} from 'react-router-dom';
import { HeartFilled, MessageFilled } from '@ant-design/icons';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class listbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initLoading: true,
            loading: false,
            data: [],
            list: []
        }
    }

    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = callback => {
        fetch(fakeDataUrl, {
            method: 'get'
        }).then(response => response.json()).then(res => {
            return callback(res);
        });
    }

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                    // In real scene, you can using public method of react-virtualized:
                    // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };
    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        margin: '30px auto 60px',
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;

        const Meta = ({name}) => (
            <span>
                <span className="takeCare">
                    <HeartFilled/>
                    <span style={{fontSize:'12px',marginLeft:'2px'}}>165</span>
                </span>
                <Link to="/">
                    <span style={{fontSize:'10px',marginLeft:'10px',color:'#b4b4b4'}}>
                        {name}
                    </span>
                </Link>
                <Link to="/" className="talk">
                    <MessageFilled  />
                    <span style={{fontSize:'12px',marginLeft:'2px'}}>165</span>
                </Link>
            </span>
        );

        return (
            <div className="listbox">
                <List
                    className="demo-loadmore-list"
                    loading={initLoading}
                    itemLayout="vertical"
                    loadMore={loadMore}
                    dataSource={list}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <Meta name="飞翔得鱼"/>
                            ]}
                            extra={
                                <img
                                    width={150}
                                    height={100}
                                    style={{borderRadius:'4px'}}
                                    alt="logo"
                                    src="https://upload-images.jianshu.io/upload_images/4099241-9c9c07fbb29a9f34.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                                />
                            }
                        >
                            <Skeleton title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    title={<a href={item.href} className="articleName" style={{ fontWeight: '700', fontSize: '18px', color: '#333' }}>纵使青楼梦好，却难付深情</a>}
                                    description={<div style={{fontSize:'13px'}}>阿陌是这清晚楼里唯一不会说话的清倌，只因弹得一曲好琵琶，才情姿容皆上品，能招引些客人，才不至于被撵了出去。 阿陌背上一缕青烟记，额间一朵茜色并蒂...</div>}
                                />
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default listbox;
import React from 'react';
import './release.less';
import { connect } from 'react-redux';
import { Radio, Button } from 'antd';
import { selectPicNumAction } from '../../../store/article/action';
import NUpload from '../../components/nUpload/nUpload';
class release extends React.Component {
    componentDidMount() {
        let { anthologyId, articleId } = this.props.match.params;
        console.log(anthologyId, articleId)
    }
    handleChange = ({ fileList }) => this.setState({ fileList });
    render() {
        const { pic_num, dispatchSelectPicNumAction } = this.props;
        return (
            <div className="release">
                <div className="mainContent">
                    <div className="hyHLk">
                        <h2>设置封面图，优化文章的显示效果</h2>
                        <span className="_3FnBB">未设置则自动按默认样式显示</span>
                        <div className="_1m2QR">
                            <div className="_3Oe8M _3Seun">
                                <b>选择图片数量</b>
                                <Radio.Group value={pic_num} onChange={dispatchSelectPicNumAction}>
                                    <Radio value={1}>一图</Radio>
                                    <Radio value={2} disabled>三图（无摘要）</Radio>
                                </Radio.Group>
                                <em className="zOzd-" data-num="1"></em>
                            </div>
                            <div className="_2dEQM _3Seun">
                                <b>上传封面图</b>
                                <span className="_3FnBB">尺寸大于 360×360，格式 png/jpg</span>
                                <div className="_2XmvE">                                  
                                    <NUpload />
                                </div>
                                <em className="zOzd-" data-num="2"></em>
                            </div>
                            <div className="_3-cmt _3Seun">
                                <b>输入摘要</b>
                                <textarea rows="2" placeholder="选填，30字内，如不填写会默认抓取首段内容" className="ant-input"></textarea>
                                <em className="zOzd-" data-num="3"></em>
                            </div>
                        </div>
                        <div className="_3v7nD">
                            <Button type="primary">保存</Button>
                            <Button style={{ marginLeft: '20px' }}>取消</Button>
                        </div>
                    </div>
                    <div className="_1GvkV">
                        <div className="_375hn">
                            <div className="_3yPS5">
                                <img className="_39crF" alt="布局" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAACmBAMAAAAYOom5AAAAHlBMVEUAAAC0tLS1tbWxsbG0tLSzs7O2tra0tLSysrKwsLD4KtosAAAACnRSTlMAKT4aMisHIjUU702qEAAAA1tJREFUeNrt2zFP20AYxnEvjcQYXLHndazzatwr7Vio1LU9V+oa1E/QeumMK3VF6heGBB8J9xyYGCM5d89vjMXy55Kc33OSoMz+Vy/0cZWEBYoMaJIE5agawXUSkp/VCN4ns3J+sNIVvG/GeOdczg/YSfJANYrkgBfJ7TJ5lSTzg8YkTMIkTMIka0wCmAQwCWASwCSAScAkk5x9//uDSR4UuRKRf0yy41jWaia5V8pGziT3fsudhkmsc7nTMoklHcUknTPp5EzSKaWzZJKOlk7BJFwl/CzZ4jfO3gz3Ja5T7l4f+TBZ8B7HvclJmcT5NPkS07ykqXr9+tbENFXTqvKJefZqpPKJ+JEbbTccewj8wSxjd+p7COrxPf99brNvkpD4d+sZk7jDkIJJ4JauZhJ3YqaYxDLSYZKOFqtlEmeRSM4k3SLZapjELhIrYxJnkUjBJN0i2aqZxC4SSzFJt0i2mESLo40+iRFHHnsSLaCJPIkRkMWdRAsq4h40GvGoYx5Ha/FRMR9aGPGqkI7kaEuLX+t5aqCOI4kRv9wzwF9EkUQL8m9N/qxfiyGJkcdknocZVQRJtCD/1uRq81oESYw8rvb8xKINPomWJyjPQGUZfBIjT3F+vraRBp5EC/BvTY7FUoEnMQK8W5MPstUEnURLj8ZuW3dkQScx0iOzv17bUYScREufotu2PnARcBIjvWq7bd2RBzwckH5qs211pOGOkOQZ1ttWlwp30CjP0L4T1AQ7jpZnWF75OkWdxKtgElAziWvBJKBhEpdiEsAkoGUS15JJQM0krgWTgIZJXIpJXAWTgJZJXPkERkjpalJJJJ3AoPFkWknUBMbR6bSSSDOBQ4uJJcmYxFUwCbhgElfOJCBlEpdiEtAwiatlElfBJKBmEteCSQCTMEk/DgcAR0iAg0aQhIRJmIRJmIRJ1pgEMAlgEsAkgEkAkwAmAUwCmAQwCWASwCSASQCTvL5zGcEyCcmpjCBLQvJGRvA1CcnMyIvlqyQoR28/v9Cn69uy5bDjqFnpvTjw2qT+NZcDDy0v/RcHX5uQcuDRdum/OPjahMz39uTfDb42IUzCJEzCJEyyxiSASQCTACYBTAKYBDAJYBLAJIBJAJMAJgFMApgEcRztwUOLV8WjLXQDxdHFnxAvwDAAAAAASUVORK5CYII=" />
                                <div className="_439Sp">
                                    <div className="_129oM">
                                        <h4>强委阿斯顿</h4>
                                        <p>撒旦</p>
                                        <span>小里QWD</span>
                                    </div>
                                    <img alt="" src="data:image/png;base64,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" />
                                </div>
                                <img className="_39crF" alt="布局" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAACmBAMAAAAYOom5AAAAHlBMVEUAAAC0tLS1tbWxsbG0tLSzs7O2tra0tLSysrKwsLD4KtosAAAACnRSTlMAKT4aMisHIjUU702qEAAAA1tJREFUeNrt2zFP20AYxnEvjcQYXLHndazzatwr7Vio1LU9V+oa1E/QeumMK3VF6heGBB8J9xyYGCM5d89vjMXy55Kc33OSoMz+Vy/0cZWEBYoMaJIE5agawXUSkp/VCN4ns3J+sNIVvG/GeOdczg/YSfJANYrkgBfJ7TJ5lSTzg8YkTMIkTMIka0wCmAQwCWASwCSAScAkk5x9//uDSR4UuRKRf0yy41jWaia5V8pGziT3fsudhkmsc7nTMoklHcUknTPp5EzSKaWzZJKOlk7BJFwl/CzZ4jfO3gz3Ja5T7l4f+TBZ8B7HvclJmcT5NPkS07ykqXr9+tbENFXTqvKJefZqpPKJ+JEbbTccewj8wSxjd+p7COrxPf99brNvkpD4d+sZk7jDkIJJ4JauZhJ3YqaYxDLSYZKOFqtlEmeRSM4k3SLZapjELhIrYxJnkUjBJN0i2aqZxC4SSzFJt0i2mESLo40+iRFHHnsSLaCJPIkRkMWdRAsq4h40GvGoYx5Ha/FRMR9aGPGqkI7kaEuLX+t5aqCOI4kRv9wzwF9EkUQL8m9N/qxfiyGJkcdknocZVQRJtCD/1uRq81oESYw8rvb8xKINPomWJyjPQGUZfBIjT3F+vraRBp5EC/BvTY7FUoEnMQK8W5MPstUEnURLj8ZuW3dkQScx0iOzv17bUYScREufotu2PnARcBIjvWq7bd2RBzwckH5qs211pOGOkOQZ1ttWlwp30CjP0L4T1AQ7jpZnWF75OkWdxKtgElAziWvBJKBhEpdiEsAkoGUS15JJQM0krgWTgIZJXIpJXAWTgJZJXPkERkjpalJJJJ3AoPFkWknUBMbR6bSSSDOBQ4uJJcmYxFUwCbhgElfOJCBlEpdiEtAwiatlElfBJKBmEteCSQCTMEk/DgcAR0iAg0aQhIRJmIRJmIRJ1pgEMAlgEsAkgEkAkwAmAUwCmAQwCWASwCSASQCTvL5zGcEyCcmpjCBLQvJGRvA1CcnMyIvlqyQoR28/v9Cn69uy5bDjqFnpvTjw2qT+NZcDDy0v/RcHX5uQcuDRdum/OPjahMz39uTfDb42IUzCJEzCJEyyxiSASQCTACYBTAKYBDAJYBLAJIBJAJMAJgFMApgEcRztwUOLV8WjLXQDxdHFnxAvwDAAAAAASUVORK5CYII=" />
                            </div>
                        </div>
                        <b className="_3wF8X">效果预览</b>
                        <span className="_3CP_r _3FnBB">仅供参考，具体效果会根据不同手机型号而变化</span>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        pic_num: state.article.pic_num
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        dispatchSelectPicNumAction: (e) => dispatch(selectPicNumAction({ pic_num: e.target.value }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(release);
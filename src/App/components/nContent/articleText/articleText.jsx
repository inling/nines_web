import React from 'react';
import './articleText.less';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../../../utils/codeBlock'
import apiMd from "./text.md";
class articleText extends React.Component {
    render() {
        return (
            <div className="articleText">
                <ReactMarkdown 
                    source={apiMd} 
                    escapeHtml={false}
                    renderers={{
                        code: CodeBlock
                    }} />
            </div>
        )
    }
}
export default articleText;
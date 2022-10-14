import React from "react";
import AceEditor from 'react-ace';
import { Container } from "./editorElements";
import "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import 'ace-builds/src-noconflict/theme-solarized_dark'
import 'ace-builds/src-noconflict/snippets/javascript'
import { setCompleters } from "ace-builds/src-noconflict/ext-language_tools";
import { useEffect } from "react";


const Editor = (props) => {
     
  useEffect(() => {
    const completer = {
      getCompletions: function(editor, session, pos, prefix, callback) {
        var completions = [
          {
            caption: "Miki.turnLeft()",
            snippet: "",
            type: "Miki.turnLeft()"
          },
          {
            caption: "Miki.turnRight()",
            snippet: "",
            type: "Miki.turnRight()"
          },
          {
            caption: "Miki.putMilk()",
            snippet: "",
            type: "Miki.putMilk()"
          },
          {
            caption: "Miki.removeMilk()",
            snippet: "",
            type: "Miki.removeMilk()"
          },
          {
            caption: "Miki.move()",
            snippet: "",
            type: "Miki.move()"
          },
          {
            caption: "Miki.treeFront()",
            snippet: "",
            type: "Miki.treeFront()"
          },
          {
            caption: "Miki.treeLeft()",
            snippet: "",
            type: "Miki.treeLeft()"
          },
          {
            caption: "Miki.treeRight()",
            snippet: "",
            type: "Miki.treeRight()"
          },
          {
            caption: "Miki.onMilk()",
            snippet: "",
            type: "Miki.onMilk()"
          },
        ];
        completions.forEach(i => {
          completions.push({
            caption: i.caption,
            snippet: i.snippet,
            type: i.type
          });
        });
        callback(null, completions);
      }
    };
    setCompleters([completer]);
  }, []);
  function handleChange(editor, data, value) {
      props.onChange(value)
  }

    return (
        <Container style={{background:"#002b36"}}>
              <AceEditor
                width={'100%'}
                height={'1000000px'}
                mode="javascript"
                readOnly={props.readOnly}
                theme='solarized_dark'
                value={props.text}
                enableSnippets={false}
                enableLiveAutocompletion={false}
                showGutter={true}
                onChange={(e)=>{handleChange("","",e)}}
                autoComplete = {'live'}
                editorProps={{ $blockScrolling: false }}
                setOptions={{
                    showLineNumbers: true,
                    useWorker: false,
                    tabSize: 2
                }}
              />
        </Container>
    )
}

export default Editor;

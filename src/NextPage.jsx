import React from "react";
import "./homePage.css";
import TopBar from "./Topbar";
import Bottombar from "./BottomBar";
import Editor from '@monaco-editor/react';
import "./NextPage.css";
function NextPage(){  
 
  return (
        <>
        <div className="homeBg">
        <TopBar />
        <p className="editorHeading">Input:</p>
        <div className="editor">
        <Editor
                        height="400px"
                        width="42vw"
                        theme="vs-dark"
                        defaultLanguage="python"
                        defaultValue="# Enter your code here"
                        className="editorInput"
                        options={{
                            minimap: {
                              enabled: false,
                            },
                            fontSize: 18,
                            wordWrap: "on",
                          }}
                          value={"// write your code here"}
                        // onChange={(value) => { setUserCode(value) }}
                    />
             
                    
                    <Editor
                        // options={options}
                        height="400px"
                        width="42vw"
                        theme="vs-dark"
                        // language={userLang}
                        defaultLanguage="python"
                        defaultValue="# Enter your code here"
                        className="editorOutput"
                        options={{
                            minimap: {
                              enabled: false,
                            },
                            fontSize: 18,
                            wordWrap: "on",
                          }}
                          value={"// write your code here"}
                        // onChange={(value) => { setUserCode(value) }}
                    />
                    </div>
                    <div className="run">RUN</div>
    </div>
        <Bottombar />
        </>
    )
}
export default NextPage;
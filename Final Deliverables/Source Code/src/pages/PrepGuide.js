import React from 'react';
import './Admissions.css';
import i1 from './img22.jpg'
import ige1 from './img11.jpg'
import ige2 from './img12.jpg';
import './PrepGuide.css'

function PrepGuide() {
  
    return (
        <div>
            <div className = "story">
                <h1>STORIES</h1>
            </div>
            <br></br>
            <div className ="storydef">
            <h4>Stories can help you inform and engage your audience. You can use stories in IBM Cognos Analytics with Watson to create scenes that visualize your data and to tell a narrative.</h4>
        </div>
        <p>__________________</p>
        <h2>What is a Story?</h2>
        <p>______________________________________________________________________</p>
        
<h4>A story is a type of view. A story is composed of a set of scenes that are displayed in sequence over time. Stories can be used to provide your data with a visual narrative.</h4>
<br></br>
<h2>What is a Scene?</h2>
        <p>_______________________________________________________________________</p> 
<h4>A scene can be considered as a container for a sequence of objects, such as widgets, data, or animations. The objects in a scene are also placed into a timeline, which dictates when the objects appear in the scene.</h4>
          <br></br>
          <h2>How is a story different from a dashboard?</h2> 
        <p>_______________________________________________________________________</p>
        <h4>Stories are similar to dashboards because they also use visualizations to share your insights. Stories differ from dashboards because they provide an over-time narrative and can convey a conclusion or recommendation.</h4>
        <br></br>
        <h4>For example, each scene can contain an analysis, insight, or piece of information that is revealed as the viewer plays the scenes in the story. The scenes build upon each other until the final scene, which provides a conclusion or summary.</h4>
       <br></br>
       <h2>Here are  example of Story - Based on NYC-Bike Share System:-</h2>
       <p>________________________________________________________________________</p>
       <h4>***Please enter into full screen mode to see the story.*** </h4>
       <p>________________________________________________________________________</p>
       <br></br>
       <h3>1. Story One</h3>
       <iframe src="https://eu2.ca.analytics.ibm.com/bi/?perspective=story&amp;pathRef=.my_folders%2FNew%2Bstory%2B1&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;sceneId=model00000184871f94ec_0000000b&amp;sceneTime=33000" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
    );
} 
export default PrepGuide;

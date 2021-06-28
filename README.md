## Live Link: https://sharp-albattani-40f0c0.netlify.app/

### Technologies Used: React, Redux, TypeScript, Sass, Web Speech Api

#### Features:

<ul>
<li>Text to audio from textarea input</li>
<li>Chose between multiple voices</li>
<li>Control speech with pause, resume & cancel button</li>
<li>Control pitch & rate of the speech voice</li>
<li>Listen to users voice & generate text based on it</li>
</ul>

#### challenges:

<ul>
<li>Fixed speech from going silent after few secounds in chrome</li>
<li>Calling the pause method on Speech Synthecys does not change the state of paused property, So used user defined isPaused to track pause state</li>
</ul>

#### bugs:

<ul>
<li>facing a bug while trying to close the speech recognition where the varible beign used to decied if it should restart or not always returns 'true' even when it has been set to false as if the block has its own local variable that is always 'true'</li>
</ul>

#### next update:

<ul>
<li>fix the current bug</li>
<li>add voice command with speech recognition</li>
<li>add filtering where swearword's are replaced with 'censored' word for both speechSynthesis & speechRecognition</li>
<li>add word highlight where the synthesisVoice is currentlly reading</li>
</ul>

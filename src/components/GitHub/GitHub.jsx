import { useState } from 'react';
import gitHubLogo from '@images/github.png';

const ghRepoUrl = 'https://github.com/lamai6/drum-machine';
const ghLogoBoxStyle = {
  position: 'absolute',
  top: '1em',
  right: '1em',
  opacity: 0.4,
  transition: 'opacity 0.3s ease-in',
};
const ghLogoStyle = {
  filter: 'invert(100%)',
};

function GitHub() {
  const [style, setStyle] = useState(ghLogoBoxStyle);

  const increaseOpacity = () =>
    setStyle((prevStyle) => ({ ...prevStyle, opacity: 1 }));

  const decreaseOpacity = () =>
    setStyle((prevStyle) => ({ ...prevStyle, opacity: 0.4 }));

  return (
    <div
      onMouseEnter={increaseOpacity}
      onMouseLeave={decreaseOpacity}
      style={style}
      id="github-logo-box"
    >
      <a
        href={ghRepoUrl}
        target="_blank"
        title="View this project repository on GitHub"
        rel="noreferrer noopener"
      >
        <img src={gitHubLogo} style={ghLogoStyle} alt="GitHub Logo" />
      </a>
    </div>
  );
}

export default GitHub;

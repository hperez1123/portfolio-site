import React from 'react'


export default function About() {
  return (
    <div id="about-div">
      {/* https://konpa.github.io/devicon/ (Use this link to update icons!!)*/}
      
      <header>
        <h2 id="about-title">Here's the skills I practice</h2>
      </header>

      <section id="skills-div">

        <a href="https://html.spec.whatwg.org/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
            HTML5 <svg className="icons" viewBox="0 0 128 128">
              <path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
            </svg>
          </div>
        </a>

        <a href="https://www.w3.org/Style/CSS/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          CSS3 <svg className="icons" viewBox="0 0 128 128">
            <path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
          </svg>
          </div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          JavaScript <svg className="icons" viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
          </svg>
          </div>
        </a>

        <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          React.js <svg className="icons" viewBox="0 0 128 128">
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
          </svg>
          </div>
        </a>

        <a href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          Node.js <svg className="icons" viewBox="0 0 128 128">
            <path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
          </svg>
          </div>
        </a>

        <a href="https://expressjs.com/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          Express.js <svg className="icons" viewBox="0 0 128 128">
            <path d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z"></path><path d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z"></path>
          </svg>
          </div>
        </a>
        
        <a href="https://sequelize.org/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          Sequelize <svg className="icons" viewBox="0 0 128 128">
            <path d="cls-1" d="M101.84,41.72V86L64.18,108.32l-.34.31V125.2l.34.32,53-30.64V33.12l-.5-.12-15,8.36.08.36"></path><path d="cls-2" d="M26.4,86.4l37.78,21.92v17.2L10.78,94.76V33.24l.55-.08,14.91,8.67.16.5V86.4"></path><path d="cls-3" d="M26.4,42.32,10.78,33.24,64.06,2.48l53.16,30.64-15.38,8.6L64.06,20.16,26.4,42.32"></path><path d="cls-1" d="M63.53,81.33l-.41-.42V64.27l.41-.21.1-.41L77.9,55.33l.44.1V72.58l-14.8,8.76"></path><path d="cls-2" d="M48.48,73.11V55.3l.41,0,14.51,8.45.12.33V81.33L48.48,73.11"></path><path d="cls-3" d="M63.29,46.54,48.48,55.3l15.05,8.76,14.8-8.64L63.29,46.54"></path><path d="cls-1" d="M45.11,92.19l-.41-.42V75.13l.41-.21.1-.41,14.27-8.32.44.1V83.43l-14.8,8.76"></path><path d="cls-2" d="M30.06,84V66.16l.41,0L45,74.59l.12.33V92.19L30.06,84"></path><path d="cls-3" d="M44.86,57.4l-14.8,8.76,15.05,8.76,14.8-8.64L44.86,57.4"></path><path d="cls-1" d="M83.27,92.6l-.41-.42V75.54l.41-.21.1-.41L97.64,66.6l.44.1V83.84L83.27,92.6"></path><path d="cls-2" d="M68.22,84.38V66.57l.41,0L83.15,75l.12.33V92.6L68.22,84.38"></path><path d="cls-3" d="M83,57.81l-14.8,8.76,15.05,8.76,14.8-8.64L83,57.81"></path><path d="cls-1" d="M64.85,103.46l-.41-.42V86.4l.41-.21.1-.41,14.27-8.32.44.1V94.7l-14.8,8.76"></path><path d="cls-2" d="M49.8,95.23V77.43l.41,0,14.51,8.45.12.33v17.27L49.8,95.23"></path><path d="cls-3" d="M64.6,68.67,49.8,77.43l15.05,8.76,14.8-8.64L64.6,68.67"></path><path d="cls-1" d="M63.53,57.73l-.41-.42V40.67l.41-.21.1-.41L77.9,31.72l.44.1V49l-14.8,8.76"></path><path d="cls-2" d="M48.48,49.5V31.7l.41,0,14.51,8.45.12.33V57.73L48.48,49.5"></path><path d="cls-3" d="M63.29,22.94,48.48,31.7l15.05,8.76,14.8-8.64L63.29,22.94"></path><path d="cls-1" d="M45.11,68.59l-.41-.42V51.53l.41-.21.1-.41,14.27-8.32.44.1V59.83l-14.8,8.76"></path><path d="cls-2" d="M30.06,60.36V42.55l.41,0L45,51l.12.33V68.59L30.06,60.36"></path><path d="cls-3" d="M44.86,33.8l-14.8,8.76,15.05,8.76,14.8-8.64L44.86,33.8"></path><path d="cls-1" d="M83.27,69l-.41-.42V51.94l.41-.21.1-.41L97.64,43l.44.1V60.24L83.27,69"></path><path d="cls-2" d="M68.22,60.77V43l.41,0,14.51,8.45.12.33V69L68.22,60.77"></path><path d="cls-3" d="M83,34.21,68.22,43l15.05,8.76,14.8-8.64L83,34.21"></path><path d="cls-1" d="M64.85,79.85l-.41-.42V62.79l.41-.21.1-.41,14.27-8.32.44.1V71.09l-14.8,8.76"></path><path d="cls-2" d="M49.8,71.63V53.82l.41,0,14.51,8.45.12.33V79.85L49.8,71.63"></path><path d="cls-3" d="M64.6,45.06,49.8,53.82l15.05,8.76,14.8-8.64L64.6,45.06"></path>
          </svg>
          </div>
        </a>

        <a href="https://www.postgresql.org/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          PostgreSQL <svg className="icons" viewBox="0 0 128 128">
            <path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985"></path><path d="M75.458 125.256c-4.367 0-7.211-1.689-8.938-3.32-2.607-2.46-3.641-5.629-4.259-7.522l-.267-.79c-1.244-3.358-1.666-8.193-1.916-14.419-.038-.935-.064-1.898-.093-2.919-.021-.747-.047-1.684-.085-2.664-1.553.742-3.213 1.27-4.962 1.568-3.079.526-6.389.356-9.84-.507-2.435-.609-4.965-1.871-6.407-3.82-4.203 3.681-8.212 3.182-10.396 2.453-3.853-1.285-7.301-4.896-10.542-11.037-2.309-4.375-4.542-10.075-6.638-16.943-3.65-11.96-5.969-24.557-6.175-28.693-.648-12.945 2.837-22.203 10.356-27.514 11.861-8.378 29.832-3.451 36.384-1.214 4.402-2.653 9.581-3.944 15.433-3.851 3.143.051 6.136.327 8.916.823 2.9-.912 8.628-2.221 15.185-2.139 12.081.144 22.092 4.852 28.949 13.615 4.894 6.252 2.474 19.381.597 26.651-2.642 10.226-7.271 21.102-12.957 30.57 1.544.011 3.781-.174 6.961-.831 6.274-1.295 8.109 2.069 8.607 3.575 1.995 6.042-6.677 10.608-9.382 11.864-3.466 1.609-9.117 2.589-13.745 2.377l-.202-.013-1.216-.107-.12 1.014-.116.991c-.311 11.999-2.025 19.598-5.552 24.619-3.697 5.264-8.835 6.739-13.361 7.709-1.544.33-2.947.474-4.219.474zm-9.19-43.671c2.819 2.256 3.066 6.501 3.287 14.434.028.99.054 1.927.089 2.802.106 2.65.355 8.855 1.327 11.477.137.371.26.747.39 1.146 1.083 3.316 1.626 4.979 6.309 3.978 3.931-.843 5.952-1.599 7.534-3.851 2.299-3.274 3.585-9.86 3.821-19.575l4.783.116-4.75-.57.14-1.186c.455-3.91.783-6.734 3.396-8.602 2.097-1.498 4.486-1.353 6.389-1.01-2.091-1.58-2.669-3.433-2.823-4.193l-.399-1.965 1.121-1.663c6.457-9.58 11.781-21.354 14.609-32.304 2.906-11.251 2.02-17.226 1.134-18.356-11.729-14.987-32.068-8.799-34.192-8.097l-.359.194-1.8.335-.922-.191c-2.542-.528-5.366-.82-8.393-.869-4.756-.08-8.593 1.044-11.739 3.431l-2.183 1.655-2.533-1.043c-5.412-2.213-21.308-6.662-29.696-.721-4.656 3.298-6.777 9.76-6.305 19.207.156 3.119 2.275 14.926 5.771 26.377 4.831 15.825 9.221 21.082 11.054 21.693.32.108 1.15-.537 1.976-1.529 5.37-6.459 10.479-11.844 10.694-12.07l2.77-2.915 3.349 2.225c1.35.897 2.839 1.406 4.368 1.502l7.987-6.812-1.157 11.808c-.026.265-.039.626.065 1.296l.348 2.238-1.51 1.688-.174.196 4.388 2.025 1.836-2.301z"></path><path fill="#336791" d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287-14.47-18.488-39.519-9.745-39.937-9.518l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"></path><path fill="#fff" d="M75.957 122.307c-8.232 0-10.84-6.519-11.907-9.185-1.562-3.907-1.899-19.069-1.551-31.503.024-.881.754-1.577 1.64-1.55.881.024 1.575.758 1.55 1.639-.401 14.341.168 27.337 1.324 30.229 1.804 4.509 4.54 8.453 12.275 6.796 7.343-1.575 10.093-4.359 11.318-11.46.94-5.449 2.799-20.951 3.028-24.01.066-.878.828-1.539 1.71-1.472.878.066 1.537.832 1.472 1.71-.239 3.185-2.089 18.657-3.065 24.315-1.446 8.387-5.185 12.191-13.794 14.037-1.463.313-2.792.453-4 .454zM31.321 90.466c-.785 0-1.498-.145-2.116-.35-5.347-1.784-10.44-10.492-15.138-25.885-3.576-11.717-5.842-23.947-6.041-27.922-.589-11.784 2.445-20.121 9.02-24.778 13.007-9.216 34.888-.44 35.813-.062.815.333 1.207 1.265.873 2.081-.333.815-1.265 1.206-2.08.874-.211-.086-21.193-8.492-32.768-.285-5.622 3.986-8.203 11.392-7.672 22.011.167 3.349 2.284 15.285 5.906 27.149 4.194 13.742 8.967 22.413 13.096 23.79.648.216 2.62.873 5.439-2.517 5.305-6.382 10.178-11.476 10.227-11.526.61-.636 1.62-.657 2.256-.047.636.61.658 1.62.048 2.255-.048.05-4.847 5.067-10.077 11.359-2.477 2.979-4.851 3.853-6.786 3.853zM100.75 77.021c-.307 0-.617-.088-.891-.272-.73-.493-.924-1.484-.431-2.215 14.863-22.055 20.08-48.704 15.612-54.414-5.624-7.186-13.565-10.939-23.604-11.156-7.433-.16-13.341 1.738-14.307 2.069l-.243.099c-.971.305-1.716-.227-1.997-.849-.333-.736-.06-1.606.631-2.025.046-.027.192-.089.429-.176l-.021.006.021-.007c1.641-.601 7.639-2.4 15.068-2.315 11.108.118 20.284 4.401 26.534 12.388 2.957 3.779 2.964 12.485.019 23.887-3.002 11.625-8.651 24.118-15.497 34.277-.306.457-.81.703-1.323.703zM101.51 87.231c-2.538 0-4.813-.358-6.175-1.174-1.4-.839-1.667-1.979-1.702-2.584-.382-6.71 3.32-7.878 5.208-8.411-.263-.398-.637-.866-1.024-1.349-1.101-1.376-2.609-3.26-3.771-6.078-.182-.44-.752-1.463-1.412-2.648-3.579-6.418-11.026-19.773-6.242-26.612 2.214-3.165 6.623-4.411 13.119-3.716-1.911-5.822-11.011-24.034-32.604-24.388-6.494-.108-11.82 1.889-15.822 5.93-8.96 9.049-8.636 25.422-8.631 25.586.023.881-.672 1.614-1.553 1.637-.881.028-1.613-.672-1.637-1.553-.02-.727-.354-17.909 9.554-27.916 4.637-4.683 10.741-6.995 18.142-6.874 13.814.227 22.706 7.25 27.732 13.101 5.479 6.377 8.165 13.411 8.386 15.759.165 1.746-1.088 2.095-1.341 2.147l-.576.013c-6.375-1.021-10.465-.312-12.156 2.104-3.639 5.201 3.406 17.834 6.414 23.229.768 1.376 1.322 2.371 1.576 2.985.988 2.396 2.277 4.006 3.312 5.3.911 1.138 1.7 2.125 1.982 3.283.131.23 1.99 2.98 13.021.703 2.765-.57 4.423-.083 4.93 1.45.997 3.015-4.597 6.532-7.694 7.97-2.775 1.29-7.204 2.106-11.036 2.106zm-4.696-4.021c.35.353 2.101.962 5.727.806 3.224-.138 6.624-.839 8.664-1.786 2.609-1.212 4.351-2.567 5.253-3.492l-.5.092c-7.053 1.456-12.042 1.262-14.828-.577-.199-.131-.378-.267-.54-.401-.302.119-.581.197-.78.253-1.58.443-3.214.902-2.996 5.105zM51.252 92.125c-1.752 0-3.596-.239-5.479-.71-1.951-.488-5.24-1.957-5.19-4.37.057-2.707 3.994-3.519 5.476-3.824 5.354-1.103 5.703-1.545 7.376-3.67.488-.619 1.095-1.39 1.923-2.314 1.229-1.376 2.572-2.073 3.992-2.073.989 0 1.8.335 2.336.558 1.708.708 3.133 2.42 3.719 4.467.529 1.847.276 3.625-.71 5.006-3.237 4.533-7.886 6.93-13.443 6.93zm-7.222-4.943c.481.372 1.445.869 2.518 1.137 1.631.408 3.213.615 4.705.615 4.546 0 8.196-1.882 10.847-5.594.553-.774.387-1.757.239-2.274-.31-1.083-1.08-2.068-1.873-2.397-.43-.178-.787-.314-1.115-.314-.176 0-.712 0-1.614 1.009-.762.851-1.311 1.548-1.794 2.162-2.084 2.646-3.039 3.544-9.239 4.821-1.513.31-2.289.626-2.674.835zM56.299 79.822c-.774 0-1.454-.565-1.575-1.354-.04-.265-.066-.531-.08-.799-4.064-.076-7.985-1.82-10.962-4.926-3.764-3.927-5.477-9.368-4.699-14.927.845-6.037.529-11.366.359-14.229-.047-.796-.081-1.371-.079-1.769.003-.505.013-1.844 4.489-4.113 1.592-.807 4.784-2.215 8.271-2.576 5.777-.597 9.585 1.976 10.725 7.246 3.077 14.228.244 20.521-1.825 25.117-.385.856-.749 1.664-1.04 2.447l-.257.69c-1.093 2.931-2.038 5.463-1.748 7.354.134.871-.464 1.685-1.335 1.819l-.244.02zm-13.835-37.562l.062 1.139c.176 2.974.504 8.508-.384 14.86-.641 4.585.759 9.06 3.843 12.276 2.437 2.542 5.644 3.945 8.94 3.945h.068c.369-1.555.982-3.197 1.642-4.966l.255-.686c.329-.884.714-1.74 1.122-2.646 1.991-4.424 4.47-9.931 1.615-23.132-.565-2.615-1.936-4.128-4.189-4.627-4.628-1.022-11.525 2.459-12.974 3.837zM52.094 41.583c-.08.564 1.033 2.07 2.485 2.271 1.449.203 2.689-.975 2.768-1.539.079-.564-1.033-1.186-2.485-1.388-1.451-.202-2.691.092-2.768.656zM54.912 44.409l-.407-.028c-.9-.125-1.81-.692-2.433-1.518-.219-.29-.576-.852-.505-1.354.101-.736.999-1.177 2.4-1.177.313 0 .639.023.967.069.766.106 1.477.327 2.002.62.91.508.977 1.075.936 1.368-.112.813-1.405 2.02-2.96 2.02zm-2.289-2.732c.045.348.907 1.496 2.029 1.651l.261.018c1.036 0 1.81-.815 1.901-1.082-.096-.182-.762-.634-2.025-.81-.28-.04-.556-.059-.821-.059-.812 0-1.243.183-1.345.282zM96.228 40.432c.079.564-1.033 2.07-2.484 2.272-1.45.202-2.691-.975-2.771-1.539-.076-.564 1.036-1.187 2.486-1.388 1.45-.203 2.689.092 2.769.655zM93.409 42.992c-1.396 0-2.601-1.086-2.7-1.791-.115-.846 1.278-1.489 2.712-1.688.316-.044.629-.066.93-.066 1.238 0 2.058.363 2.14.949.053.379-.238.964-.739 1.492-.331.347-1.026.948-1.973 1.079l-.37.025zm.943-3.013c-.276 0-.564.021-.856.061-1.441.201-2.301.779-2.259 1.089.048.341.968 1.332 2.173 1.332l.297-.021c.787-.109 1.378-.623 1.66-.919.443-.465.619-.903.598-1.052-.028-.198-.56-.49-1.613-.49zM98.317 72.822c-.305 0-.613-.088-.886-.27-.732-.49-.929-1.481-.438-2.213 3.398-5.075 2.776-10.25 2.175-15.255-.257-2.132-.521-4.337-.453-6.453.07-2.177.347-3.973.614-5.71.317-2.058.617-4.002.493-6.31-.048-.88.627-1.631 1.507-1.679.883-.047 1.632.627 1.679 1.507.142 2.638-.197 4.838-.525 6.967-.253 1.643-.515 3.342-.578 5.327-.061 1.874.178 3.864.431 5.97.64 5.322 1.365 11.354-2.691 17.411-.308.459-.813.708-1.328.708z"></path><path stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M4.335 19.029" fill="none"></path>
          </svg>
          </div>
        </a>

        <a href="https://www.ruby-lang.org/en/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          Ruby <svg className="icons" viewBox="0 0 128 128">
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#D91404" d="M35.971 111.33c27.466 3.75 54.444 7.433 81.958 11.188-9.374-15.606-18.507-30.813-27.713-46.144l-54.245 34.956zM125.681 24.947c-2.421 3.636-4.847 7.269-7.265 10.907-8.304 12.493-16.607 24.986-24.903 37.485-.462.696-1.061 1.248-.41 2.321 8.016 13.237 15.969 26.513 23.942 39.777 1.258 2.095 2.53 4.182 4.157 6.192 1.612-32.193 3.223-64.387 4.834-96.58l-.355-.102zM16.252 66.22c.375.355 1.311.562 1.747.347 7.689-3.779 15.427-7.474 22.948-11.564 2.453-1.333 4.339-3.723 6.452-5.661 6.997-6.417 13.983-12.847 20.966-19.278.427-.395.933-.777 1.188-1.275 2.508-4.902 4.973-9.829 7.525-14.898-3.043-1.144-5.928-2.263-8.849-3.281-.396-.138-1.02.136-1.449.375-6.761 3.777-13.649 7.353-20.195 11.472-3.275 2.061-5.943 5.098-8.843 7.743-4.674 4.266-9.342 8.542-13.948 12.882-1.222 1.152-2.336 2.468-3.288 3.854-3.15 4.587-6.206 9.24-9.402 14.025 1.786 1.847 3.41 3.613 5.148 5.259zM44.354 59.949c-3.825 16.159-7.627 32.227-11.556 48.823 18.423-11.871 36.421-23.468 54.3-34.987-14.228-4.605-28.41-9.196-42.744-13.836zM120.985 25.103c-15.566 2.601-30.76 5.139-46.15 7.71 5.242 12.751 10.379 25.246 15.662 38.096 10.221-15.359 20.24-30.41 30.488-45.806zM44.996 56.644c14.017 4.55 27.755 9.01 41.892 13.6-5.25-12.79-10.32-25.133-15.495-37.737-8.815 8.059-17.498 15.999-26.397 24.137zM16.831 75.643c-4.971 11.883-9.773 23.362-14.662 35.048 9.396-.278 18.504-.547 27.925-.825-4.423-11.412-8.759-22.6-13.263-34.223zM30.424 101.739l.346-.076c3.353-13.941 6.754-27.786 10.177-42.272-7.636 3.969-14.92 7.754-22.403 11.644 3.819 9.926 7.891 20.397 11.88 30.704zM115.351 22.842c-4.459-1.181-8.918-2.366-13.379-3.539-6.412-1.686-12.829-3.351-19.237-5.052-.801-.213-1.38-.352-1.851.613-2.265 4.64-4.6 9.245-6.901 13.868-.071.143-.056.328-.111.687 13.886-2.104 27.679-4.195 41.47-6.285l.009-.292zM89.482 12.288l36.343 10.054c-2.084-5.939-4.017-11.446-6.005-17.11l-30.285 6.715-.053.341zM33.505 114.007c-4.501-.519-9.122-.042-13.687.037-3.75.063-7.5.206-11.25.323-.386.012-.771.09-1.156.506 31.003 2.866 62.005 5.732 93.007 8.6l.063-.414c-9.938-1.357-19.877-2.714-29.815-4.07-12.384-1.691-24.747-3.551-37.162-4.982zM2.782 99.994c3.995-9.27 7.973-18.546 11.984-27.809.401-.929.37-1.56-.415-2.308-1.678-1.597-3.237-3.318-5.071-5.226-2.479 12.24-4.897 24.177-7.317 36.113l.271.127c.185-.297.411-.578.548-.897zM81.522 9.841c6.737-1.738 13.572-3.097 20.367-4.613.44-.099.87-.244 1.303-.368l-.067-.332c-9.571 1.287-19.141 2.575-29.194 3.928 2.741 1.197 4.853 2.091 7.591 1.385z"></path>
          </svg>
          </div>
        </a>

        <a href="https://git-scm.com/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          Git <svg className="icons" viewBox="0 0 128 128">
            <path fill="#F34F29" d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"></path>
          </svg>
          </div>
        </a>

        <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          Github <svg className="icons" viewBox="0 0 128 128">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
          </svg>
          </div>
        </a>

        <a href="https://rubyonrails.org/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          Ruby on Rails <svg className="icons" viewBox="0 0 128 128">
            <path fill="#A62C39" d="M17.444 125.054s.188-29.538.188-59.564c0-58.159-4.901-62.491 21.194-62.491h72.635v83.889c0 27.615 5.162 38.433-23.859 38.433-29.021.001-70.158-.267-70.158-.267z"></path><path fill="url(#a)" d="M350.603 449.926s4.655.932 8.688 7.757c4.034 6.826 25.444 59.886 25.444 59.886v-43.131l-19.858-32.27 5.585 6.827 10.55-8.689-13.653-.93-16.756 10.55z"></path><path opacity=".668" fill="url(#b)" enable-background="new" d="M309.335 439.686s30.719 20.479 45.613 24.513c14.894 4.035 30.408 8.378 30.408 8.378l-35.373 86.88 15.204.621 19.86-49.026-.622-71.676-75.09.31z"></path><path fill="#fff" fill-opacity=".44" d="M337.881 531.221l31.956 30.733-59.571-1.256s-1.861-18.927-1.241-28.856l3.723-9.929 25.133 9.308z"></path><path fill-opacity=".362" d="M94.085 125.365l-28.856-29.788-26.375-9.929-20.479-45.612 21.721-36.304-14.584-.621-5.896 5.586-2.172 4.344-1.552 112.945 78.193-.621z"></path><path opacity=".5" fill="#83222D" enable-background="new" d="M111.773 77.89s-29.167 9.309-46.543 17.997c-17.376 8.688-26.685 29.787-26.685 29.787s37.234-1.861 51.197-1.241c13.963.621 20.479.621 21.72-18.927 1.241-19.548.311-27.616.311-27.616z"></path><path d="M26.435 96.422v18.326h4.674v-4.773l4.254 4.254h7.172l-5.688-5.688s4.093-.067 4.402-5.984c0-5.43-4.097-6.134-8.83-6.134h-5.984zm4.897 4.971h4.031v3.265h-4.031v-3.265z"></path><path d="M51.562 96.496c-2.559-.015-6.108.223-6.108 5.045v12.737h4.797v-3.116h4.65v3.042h4.822v-13.354c0-4.189-4.654-4.353-7.147-4.353l-1.014-.001zm-1.237 4.6h4.501v5.021h-4.501v-5.021z"></path><path d="M64.531 96.507h4.964v17.531h-4.964z"></path><path d="M74.692 96.741v17.531h11.947v-4.654h-7.059v-12.955l-4.888.078z"></path><path d="M102.463 96.585v4.732h-7.99v1.707h3.413c1.785 0 5.508-.077 5.508 5.508s-2.561 5.896-7.758 5.896h-6.283v-4.267h7.214c2.172 0 2.292-.708 2.292-1.324 0-.615-1.11-.902-3.369-.902s-6.447-1.11-6.447-5.454 2.172-5.973 6.516-5.973c4.345-.001 6.904.077 6.904.077z"></path><path d="M30.787 91.233h41.269s-9.154-20.789-6.826-39.873c2.326-19.082 17.376-27.771 25.909-28.702 8.533-.931 13.187 4.344 13.187 4.344l1.861-2.792s-12.256-12.412-27.771-11.015c-15.514 1.395-26.219 11.635-32.89 24.046-6.671 12.412-10.55 21.101-13.188 34.132-2.637 13.033-1.551 19.86-1.551 19.86z"></path><path d="M22.565 70.444l8.066.62-1.396 8.068-7.602-.931.932-7.757z"></path><path d="M35.286 53.377l2.172-6.05-7.137-2.793-2.327 6.516 7.292 2.327z"></path><path d="M45.37 32.588l4.189-4.965-5.43-3.568-4.343 4.81 5.584 3.723z"></path><path d="M56.385 13.351l3.724 4.499 5.12-2.947-3.724-4.189-5.12 2.637z"></path><path d="M74.538 8.231l.93 4.499 6.361-.155-.62-4.034-6.671-.31z"></path><path d="M96.102 13.04l-.155 2.792 4.343 2.328.931-1.396-5.119-3.724z"></path><path d="M95.172 24.986v2.327l4.189.465v-1.861l-4.189-.931z"></path><path d="M81.829 27.002l2.017 3.724 2.948-2.327-.621-2.482-4.344 1.085z"></path><path d="M75.468 31.812l3.103 4.655-1.862 3.257-4.499-4.965 3.258-2.947z"></path><path d="M69.262 44.69l-2.017 4.033 5.275 4.5 1.241-5.121-4.499-3.412z"></path><path d="M67.09 58.807l-.31 5.43 6.516 2.792-.311-5.119-5.895-3.103z"></path><path d="M68.952 78.045l1.552 5.586 8.223.465-2.949-6.051h-6.826z"></path><path stroke="#5E000E" stroke-width="3" d="M17.444 125.054s.188-29.538.188-59.564c0-58.159-4.901-62.491 21.194-62.491h72.635v83.889c0 27.615 3.921 38.433-23.859 38.433-27.78.001-70.158-.267-70.158-.267z" fill="none"></path>
          </svg>
          </div>
        </a>

        <a href="https://slack.com/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          slack <svg className="icons" viewBox="0 0 128 128">
            <path d="cls-1" d="M12.81,67.6a10.2,10.2,0,0,1-9.94-7c-.06-.17-.1-.33-.15-.49A10.69,10.69,0,0,1,9.64,47.07L97,17.8a11.82,11.82,0,0,1,3.19-.47,10.47,10.47,0,0,1,10.21,7.14l.13.42c1.63,5.71-2.43,10.81-7.29,12.44L16.36,67a11.3,11.3,0,0,1-3.55.6Z"></path><path d="cls-2" d="M27.37,110.55a10.19,10.19,0,0,1-10-6.89c-.05-.16-.1-.32-.15-.49A10.76,10.76,0,0,1,24.16,90L111.5,60.46a11.24,11.24,0,0,1,3.47-.58A10.55,10.55,0,0,1,125.15,67l.13.44A11.05,11.05,0,0,1,124,76.28c-1.25,1.95-5.19,3.66-5.19,3.66l-87.68,30a12,12,0,0,1-3.71.63Z"></path><path d="cls-3" d="M100.08,110.74a10.72,10.72,0,0,1-10.27-7.31L60.66,16.84l-.15-.49A10.74,10.74,0,0,1,81,10l29.15,86.58.08.28a10.73,10.73,0,0,1-10.17,13.89Z"></path><path d="cls-4" d="M56.75,125.33A10.73,10.73,0,0,1,46.48,118L17.33,31.43l-.15-.48a10.72,10.72,0,0,1,6.9-13.12,10.89,10.89,0,0,1,3.34-.56,10.72,10.72,0,0,1,10.27,7.31l29.14,86.59c.05.15.1.32.15.48a10.73,10.73,0,0,1-10.23,13.68h0Z"></path><path d="cls-5" d="M85.71,91.24,106,84.29,99.39,64.56,79,71.44Z"></path><path d="cls-6" d="M42.45,106l20.32-6.95L56.08,79.2,35.73,86.08Z"></path><path d="cls-7" d="M71.24,48.26l20.33-6.94L85,21.82,64.64,28.64Z"></path><path d="cls-8" d="M28,63,48.3,56.09,41.65,36.34,21.29,43.16,28,63Z"></path>
          </svg>
          </div>
        </a>

        <a href="https://visualstudio.microsoft.com/" rel="noopener noreferrer" target="_blank">
          <div className="single-skill-div">
          Visual Studios <svg className="icons" viewBox="0 0 128 128">
            <path d="a" d="M95 2.3l30.5 12.3v98.7L94.8 125.7 45.8 77l-31 24.1L2.5 94.9V33.1l12.3-5.9 31 24.3ZM14.8 45.7V83.2l18.5-19Zm48.1 18.5L94.8 89.3V39Z"></path>
          </svg>
          </div>
        </a>

      </section>



      <div>
        <p id="button-intro">How was I able to use these skills?</p>
        <button id="project-button"><a href="#projects-div" id="project-link">See some of my recent work!</a></button>
      </div>


    </div>
  )
}
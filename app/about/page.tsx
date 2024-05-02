
const About = () => {
  return (
    <div className='max-w-screen-md mx-auto text-left'>
      <h2 className="text-3xl md:text-5xl font-bold mb-10">Hack-A-Vishkar</h2>
      <ul className="text-sm md:text-xl list-disc space-y-3 ">
        <li>Spam detector is a Hack-A-Vishkar project.</li>
        <li>Created using flask backend and nextjs frontend</li>
        <li>We have used Random Forest Classifier for training our email model. </li>
        <li>We have used Multinovial Naive Based for training our message model. </li>
        <li>The flask server exposes different APIs for predicting emails and messages</li>
        <li>The nextJs app uses those APIs to predict the result for the content.</li>
        <li>The result then will bedisplayed as a toast notification.</li>
      </ul>

    </div>
  )
}

export default About
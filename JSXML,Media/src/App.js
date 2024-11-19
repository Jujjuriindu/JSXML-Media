import logo from "./logo.svg";
import "./App.css";
import kushiMovie from "./video/kushiVideo.mp4";


function App() {
  return (
    <div className="App">
      <h1 class="amaranMovie">Amaran Movie</h1>
      <img src="https://t2blive.com/wp-content/uploads/2024/11/GbHrPzCWwAAIh-M-1.jpg"></img>
      <p id="amaranPara">
        Amaran (transl.The Immortal) is a 2024 Indian Tamil-language
        biographical action war film directed by Rajkumar Periasamy and produced
        by Raaj Kamal Films International, together with Sony Pictures Films
        India. The film stars Sivakarthikeyan as Major Mukund Varadarajan,
        alongside Sai Pallavi, Bhuvan Arora and Rahul Bose. It is an adaptation
        of the book series India's Most Fearless: True Stories of Modern
        Military Heroes by Shiv Aroor and Rahul Singh, which contains a segment
        based on Mukund. The film follows Indhu Rebecca Varghese, Mukund's wife,
        who narrates the life of the Major on her way to New Delhi to receive
        the Ashoka Chakra, which was awarded posthumously to Mukund.
        </p>
      <audio src="./audio/amaranAudio.mpeg" controls></audio>
      <hr></hr>
      <h1 class="amaranMovie">Kushi Movie</h1>
      <img src="./images/kushiImage.jpg"></img>
      <p id="kushiPara">
        Kushi (transl.Happiness) is a 2023 Indian Telugu-language romantic
        comedy film written and directed by Shiva Nirvana and produced by Mythri
        Movie Makers. The film stars Vijay Deverakonda and Samantha.The film was
        announced in April 2022, and was tentatively titled as VD11, as it is
        Devarakonda's eleventh lead role; while the official title Kushi was
        announced in May. Principal photography commenced in April 2022 in
        Kashmir, and wrapped in July 2023. The music is composed by Hesham Abdul
        Wahab, while the cinematography and editing are handled by Murali G. and
        Prawin Pudi, respectively.
        </p>
      <video src={kushiMovie} controls muted autoPlay></video>
    </div>
  );
}

export default App;

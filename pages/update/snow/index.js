import { Navbar, Footer } from '../../../components/';

const UpdatePost = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <div className="h-screen bg-black">
      <div className="text-white font-bold items-center text-center mt-12">
      <h1 className="text-5xl mt-6">First Post</h1>
        <h1 className="text-5xl mt-12">大家好，我們終於有這個東西了</h1>
        <h1 className="text-3xl ">這裡以後會發布一些有關於伺服器的更新日誌</h1>
      </div>
    </div>
    <Footer />
  </div>

);

export default UpdatePost;

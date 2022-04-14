import './App.css';
import React, {useState} from "react";

function App(){
    const [nama, setNama] = useState('');
    const [tglLahir, setTglLahir] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [userHobi, setHobi] = useState({ 
      hobi: [], 
      response: [], 
    });
    const [agama, setAgama] = useState('');
    const [pesan, setPesan] = useState('');
    const [tampil, setTampil] = useState(false);

    const inputNama = (e) =>{
      setNama(e.target.value);
      setTampil(false);
    }

    const inputTglLahir = (e) =>{
      setTglLahir(e.target.value);
      setTampil(false);
    }

    const inputJenisKelamin = (e) => {
      setJenisKelamin(e.target.value);
      setTampil(false);
    }

    const inputHobi = (e) => { 
        // Destructuring 
        const { value, checked } = e.target; 
        const { hobi } = userHobi; 
    
        // Case 1 : Ketika user checklist box
        if (checked) { 
          setHobi({ 
            hobi: [...hobi, value],
            response: [...hobi, value], 
          }); 
        }

        // Case 2  : Ketika user tidak checklist box
        else { 
          setHobi({ 
            hobi: hobi.filter((e) => e !== value), 
            response: hobi.filter((e) => e !== value), 
          }); 
        }
    }
    
    const inputAgama = (e) => {
        setAgama(e.target.value);
        setTampil(false);
    }

    const inputPesan = (e) => {
        setPesan(e.target.value);
        setTampil(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    function resetField() {
        document.getElementById("namaLengkap").value = "";
        document.getElementById("tglLahir").value = "";
        var element = document.getElementsByName("jenisKelamin");
        for(var i=0;i<element.length;i++)
            element[i].checked = false;
        element = document.getElementsByName("hobi");
        for(i=0;i<element.length;i++)
            element[i].checked = false;
        document.getElementById("agama").value = "";
        document.getElementById("pesan").value = "";
        setTampil(true);
    }

    return(
      <div class="container">
        <h1>Biodata</h1>
        <form id="form-input" onSubmit={handleSubmit}>
            <div class="form-name margin-bottom">
                <label for="name">Nama Lengkap</label><br>
                <input type="text" id="namaLengkap" name="nama" onChange={inputNama}>
            </div>
            <div class="form-birthday margin-bottom">
                <label for="birthday">Tanggal Lahir</label><br>
                <input type="date" id="birthday" name="tglLahir" onChange={inputTglLahir}>
            </div>
            <div class="form-gender margin-bottom">
                <label for="gender">Jenis Kelamin</label><br>
                <div class="choice" id="jenisKelamin">
                    <input type="radio" name="jenisKelamin" id="jenisKelamin" value="Laki-laki" onChange={inputJenisKelamin}>
                    <label for="gender">Laki-laki</label>
                    <input type="radio" name="jenisKelamin" id="jenisKelamin" value="Perempuan" onChange={inputJenisKelamin}>
                    <label for="gender">Perempuan</label>
                    <input type="radio" name="jenisKelamin" id="jenisKelamin" value="Other" onChange={inputJenisKelamin}>
                    <label for="gender">Other</label>
                </div>
            </div>
            <div class="form-hobby margin-bottom">
                <label for="hobby">Hobi</label><br>
                <div class="choice" id="hobi">
                    <input type="checkbox" name="hobi" id="hobi" value="Ngoding" onChange={inputHobi}>
                    <label for="hobby">Ngoding</label>
                    <input type="checkbox" name="hobi" id="hobi" value="Rebahan" onChange={inputHobi}>
                    <label for="hobby">Rebahan</label>
                    <input type="checkbox" name="hobi" id="hobi" value="Melamun" onChange={inputHobi}>
                    <label for="hobby">Melamun</label>
                    <input type="checkbox" name="hobi" id="hobi" value="Baca Buku" onChange={inputHobi}>
                    <label for="hobby">Baca Buku</label>
                    <input type="checkbox" name="hobi" id="hobi" value="Nonton Youtube" onChange={inputHobi}>
                    <label for="hobby">Nonton Youtube</label>
                    <input type="checkbox" name="hobi" id="hobi" value="Dengerin Lagu" onChange={inputHobi}>
                    <label for="hobby">Dengerin Lagu</label>
                    <input type="checkbox" name="hobi" id="hobi" value="Other" onChange={inputHobi}>
                    <label for="hobby">Other</label>
                </div>
            </div>
            <div class="form-religion margin-bottom">
                <label for="religion">Agama</label><br>
                <select id="agama" name="agama" onChange={inputAgama}>
                    <option value="Budha" selected>Budha</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Islam">Islam</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Tao">Tao</option>
                    <option value="Protestan">Protestan</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-message margin-bottom">
                <label for="message">Pesan</label><br>
                <textarea id="pesan" name="pesan" onChange={inputPesan}></textarea>
            </div>
            <button type="submit" onclick={resetField}>Submit</button>
        </form>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="label-width">Label</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Nama</th>
              {
                tampil?
                <td>{nama}</td>
                :null
              }
            </tr>
            <tr>
              <th scope="row">Tanggal Lahir</th>
              {
                tampil?
                <td>{tglLahir}</td>
                :null
              }
            </tr>
            <tr>
              <th scope="row">Jenis Kelamin</th>
              {
                tampil?
                <td>{jenisKelamin}</td>
                :null
              }
            </tr>
            <tr>
              <th scope="row">Hobi</th>
              {
                tampil?
                <td>{userHobi.response.join(", ")}</td>
                :null
              }
            </tr>
            <tr>
              <th scope="row">Agama</th>
              {
                tampil?
                <td>{agama}</td>
                :null
              }
            </tr>
            <tr>
              <th scope="row">Pesan</th>
              {
                tampil?
                <td>{pesan}</td>
                :null
              }
            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default Form;
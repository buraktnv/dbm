import React, { useEffect } from "react";
import "./create_post.css";
import useForm from "../../hooks/useFrom";

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "0+", "0-"];
const BIRTH_PLACE = [
  "ADANA",
  "ADIYAMAN",
  "AFYONKARAHİSAR",
  "AĞRI",
  "AMASYA",
  "ANKARA",
  "ANTALYA",
  "ARTVİN",
  "AYDIN",
  "BALIKESİR",
  "BİLECİKK",
  "BİNGÖL",
  "BİTLİS",
  "BOLU",
  "BURDUR",
  "BURSA",
  "ÇANAKKALE",
  "ÇANKIRI",
  "ÇORUM",
  "DENİZLİ",
  "DİYARBAKIR",
  "EDİRNE",
  "ELAZIĞ",
  "ERZİNCAN",
  "ERZURUM",
  "ESKİŞEHİR",
  "GAZİANTEP",
  "GİRESUN",
  "GÜMÜŞHANE",
  "HAKKARİ",
  "HATAY",
  "ISPARTA",
  "MERSİN",
  "İSTANBUL",
  "İZMİR",
  "KARS",
  "KASTAMONU",
  "KAYSERİ",
  "KIRKLARELİ",
  "KIRŞEHİR",
  "KOCAELİ",
  "KONYA",
  "KÜTAHYA",
  "MALATYA",
  "MANİSA",
  "KAHRAMANMARAŞ",
  "MARDİN",
  "MUĞLA",
  "MUŞ",
  "NEVŞEHİR",
  "NİĞDE",
  "ORDU",
  "RİZE",
  "SAKARYA",
  "SAMSUN",
  "SİİRT",
  "SİNOP",
  "SİVAS",
  "TEKİRDAĞ",
  "TOKAT",
  "TRABZON",
  "TUNCELİ",
  "ŞANLIURFA",
  "UŞAK",
  "VAN",
  "YOZGAT",
  "ZONGULDAK",
  "AKSARAY",
  "BAYBURT",
  "KARAMAN",
  "KIRIKKALE",
  "BATMAN",
  "ŞIRNAK",
  "BARTIN",
  "ARDAHAN",
  "IĞDIR",
  "YALOVA",
  "KARABüK",
  "KİLİS",
  "OSMANİYE",
  "DÜZCE",
];

const EmployeeForm = () => {
  const [value, handleChange] = useForm({
    tcno: "",
    name: "",
    surname: "",
    bloodType: "",
    birthplace: "",
    position: "",
    salary: "",
    hobbies: "",
  });

  const submit = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="container px-2 mx-auto tracking-wide text-gray-600">
      <div className="flex flex-col gap-2 mx-4">
        <div>
          <label htmlFor="tcno" className="text-gray-600 label-css ">
            Tc No
          </label>
          <input
            className="input-css"
            type="number"
            name="tcno"
            placeholder="Tc Kimlik Numarası Alanı"
            value={value.tcno}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name" className="text-gray-600 label-css ">
            İsim
          </label>
          <input
            className="input-css"
            type="text"
            name="name"
            placeholder="İsim Alanı"
            value={value.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="surname" className="text-gray-600 label-css ">
            Soyisim
          </label>
          <input
            className="input-css"
            type="text"
            name="surname"
            placeholder="Soyisim Alanı"
            value={value.surname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bloodType" className="text-gray-600 label-css ">
            Kan Grubu
          </label>
          <select
            className="input-css"
            aria-label="Default select example"
            name="bloodType"
            onChange={handleChange}
          >
            <option selected>Kan Grubunu Seçiniz</option>
            {BLOOD_TYPES.map((blood_type) => (
              <option value={blood_type}>{blood_type}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="birthplace" className="my-3 text-gray-600 label-css">
            Doğum Yeri
          </label>
          <select
            className="input-css"
            aria-label="select example"
            name="birthplace"
            onChange={handleChange}
          >
            <option selected>Doğum Yeri Seçiniz</option>
            {BIRTH_PLACE.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="position" className="text-gray-600 label-css ">
            Pozisyon
          </label>
          <input
            className="input-css"
            type="text"
            name="position"
            placeholder="Pozisyon Bilgisi"
            value={value.position}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="salary" className="text-gray-600 label-css ">
            Maaş Bilgisi
          </label>
          <input
            className="input-css"
            type="number"
            name="salary"
            placeholder="Maaş Bilgisi"
            value={value.salary}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="salary" className="text-gray-600 label-css ">
            Hobileri
          </label>
          <textarea
            className="input-css"
            type="number"
            name="hobbies"
            placeholder="Hobi Alanı"
            value={value.hobbies}
            onChange={handleChange}
          />
        </div>
        <button onClick={submit} className="justify-end w-32 my-4 save-button">
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default EmployeeForm;

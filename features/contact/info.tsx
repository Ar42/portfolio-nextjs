import {
  HOME_CONTACT_LOCATION_DATA,
  HOME_CONTACT_MEDIA_DATA,
} from "../../public/data/contact";

const Info = () => {
  return (
    <>
      <h2 className="text-base font-bold mb-4">Contact information</h2>

      <div className="lg:flex gap-x-10 mb-10">
        <div className="bg-gray-200 lg:w-1/2 p-4 rounded-md mb-4 lg:mb-0">
          <p className="text-base mb-2">
            <span className="font-medium">Country:</span>
            <span> {HOME_CONTACT_LOCATION_DATA.country}</span>
          </p>

          <p className="text-base mb-2">
            <span className="font-medium">City:</span>
            <span> {HOME_CONTACT_LOCATION_DATA.city}</span>
          </p>

          <p className="text-base mb-2">
            <span className="font-medium">Present Address:</span>
            <span> {HOME_CONTACT_LOCATION_DATA.present}</span>
          </p>
        </div>

        <div className="bg-gray-200 lg:w-1/2 p-4 rounded-md">
          <p className="text-base mb-2">
            <span className="font-medium">Email:</span>
            <span> {HOME_CONTACT_MEDIA_DATA.email}</span>
          </p>

          <p className="text-base mb-2">
            <span className="font-medium">Skype:</span>
            <span> {HOME_CONTACT_MEDIA_DATA.skype}</span>
          </p>

          <p className="text-base mb-2">
            <span className="font-medium">Linkedin:</span>
            <span> {HOME_CONTACT_MEDIA_DATA.linkedin}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;

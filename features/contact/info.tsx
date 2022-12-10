import Link from "next/link";
import {
  HOME_CONTACT_LOCATION_DATA,
  HOME_CONTACT_MEDIA_DATA,
} from "../../public/data/contact";

const Info = () => {
  return (
    <>
      <h2 className="mb-4 text-lg font-bold">Contact information</h2>

      <div className="mb-10 lg:flex gap-x-10">
        <div className="p-4 mb-4 bg-gray-800 rounded-md lg:w-1/2 lg:mb-0">
          <p className="mb-2 text-base">
            <span className="font-medium">Country:</span>
            <span> {HOME_CONTACT_LOCATION_DATA.country}</span>
          </p>

          <p className="mb-2 text-base">
            <span className="font-medium">City:</span>
            <span> {HOME_CONTACT_LOCATION_DATA.city}</span>
          </p>

          <p className="mb-2 text-base">
            <span className="font-medium">Present Address:</span>
            <span> {HOME_CONTACT_LOCATION_DATA.present}</span>
          </p>
        </div>

        <div className="p-4 bg-gray-800 rounded-md lg:w-1/2">
          <p className="mb-2 text-base">
            <span className="font-medium">Email: </span>
            <a
              href={`mailto:${HOME_CONTACT_MEDIA_DATA.email}`}
              className="text-green-500 hover:underline"
            >
              {HOME_CONTACT_MEDIA_DATA.email}
            </a>
          </p>

          <p className="mb-2 text-base">
            <span className="font-medium">Skype: </span>
            <Link
              href={HOME_CONTACT_MEDIA_DATA.skype}
              target="blank"
              className="text-green-500 hover:underline"
            >
              Abid Hasan
            </Link>
          </p>

          <p className="mb-2 text-base">
            <span className="font-medium">Linkedin: </span>
            <Link
              href={HOME_CONTACT_MEDIA_DATA.linkedin}
              target="blank"
              className="text-green-500 hover:underline"
            >
              Abid Hasan
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;

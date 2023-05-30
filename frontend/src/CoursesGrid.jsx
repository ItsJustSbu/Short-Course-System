import { useNavigate, Link } from "react-router-dom";
import { getDocs, getFirestore, query, collection } from "firebase/firestore";
import { getAuth, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import app from "./firebase/firebase";

function Example() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);


    const fetchData = async () => {
      const auth = getAuth(app);
      const db = getFirestore(app);
      await onAuthStateChanged(auth, (user) => {
        if (user) {
        } else {
          const provider = new GoogleAuthProvider();
          signInWithRedirect(auth, provider);
        }
      });

      const querySnapshot = await getDocs(query(collection(db, "courses")));
      setData(querySnapshot.docs);
    };
    fetchData();
  
  const handleClick = (href) => {
    navigate(href);
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((d) => (
            <div
              key={d.data()["authorId"]}
              className="group relative"
              title={d.data()["title"]}
            >
              <div
                className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
                
              >
                <img
                  src={d.data()["thumbnail"]}
                  alt={d.data()["title"]}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-200">
                  <Link to={{ pathname:'/course-info', state: d.data()["courseId"]}}>
                    <span aria-hidden="true" className="absolute inset-0" />
                      {d.data()["title"]}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-200">
                    {"Sibusiso Mfana"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Example;
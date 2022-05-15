import React, { useContext, useEffect } from "react";
import Loading from "../components/user-list/Loading";
import UserMoreInfoCard from "../components/user-list/UserMoreInfoCard";
import {Link,useParams} from "react-router-dom";
import UserContext from "../context/user-context";
import {GrFormView} from "react-icons/gr"
import {AiFillStar} from "react-icons/ai"
import {AiOutlineFork} from "react-icons/ai"
import {BsArrow90DegLeft} from "react-icons/bs"
const UserPage = () => {
  const { user, userRepo, fetchUserProfile, fetchUserRepo, loading } =
    useContext(UserContext);
  const { login } = useParams();
  useEffect(() => {
    fetchUserProfile(login);
    fetchUserRepo(login);
  }, []);
  

  if (loading) {
    return <Loading loadingMsg="Loading User..." />;
  }
  return (
    <div>
      <div className="container mx-auto px-2">

      {/******Back to Search Button Starts Here*************/}
      <Link to="/">
      <button className="flex items-center bg-slate-900 px-2 py-1 rounded-md active:bg-slate-800 hover:bg-slate-800 transition-all duration-500 ease-in-out">
        <BsArrow90DegLeft className="pr-2 text-xl text-slate-200"/>
        <div className="font-semibold">Back to Search</div>
      </button>
      </Link>
      {/*Back to Search Button Ends Here***********/}

        {/***************Userpage header starts here**********************/}
        <div className=" user-header sm:grid xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-6 mb-4 mt-8">
          <div className=" md:col-span-1 xl:col-span-2">
            <img
              className="w-36 sm:w-44 rounded-full"
              src={user.avatar_url}
              alt="avatar"
            />
            <div className=" pl-2 text-2xl font-semibold py-6">{user.name}</div>
          </div>
          <div className="xl:col-span-10 lg:col-span-7 md:col-span-5">
            <div className=" flex justify-around py-4 sm:pt-0">
              <div className=" px-4 py-2 flex flex-col items-center justify-center">
                <div className="followers">Followers</div>
                <div className="following">{user.followers}</div>
              </div>
              <div className=" px-4 py-2 flex flex-col items-center justify-center">
                <div className="followers">Following</div>
                <div className="following">{user.following}</div>
              </div>
              <div className=" px-4 py-2 flex flex-col items-center justify-center">
                <div className="followers">Repo</div>
                <div className="following">{user.public_repos}</div>
              </div>
            </div>
            <div className="px-2">
              <div className="sm:text-lg font-semibold pt-2 pl-4">
                {user.bio}
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between pt-4 pl-4">
                <UserMoreInfoCard
                  infoTitle="location"
                  infoStat={user.location}
                />
                <UserMoreInfoCard infoTitle="company" infoStat={user.company} />
                <UserMoreInfoCard
                  infoTitle="twitter"
                  infoStat={user.twitter_username}
                />
                <UserMoreInfoCard infoTitle="website" infoStat={user.blog} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/***************userpage Header ends here********/}

      {/***************User Repo Section starts here****/}
      <section className="user-repo-section mt-8 mb-4">
      <h1 className="text-3xl sm:text-4xl font-semibold text-yellow-500 py-4">Repositories</h1>
        {userRepo.map((repo) => (
          <div key={repo.id} className=" px-2 py-4 mb-8 card-box">
            <div className="pt-2 pb-6 sm:flex sm:justify-between items-center">
              <div className="text-xl text-slate-200 font-semibold">
                {repo.name}
              </div>
              <div className="flex mt-3">
                <div className="mr-4">
                  <div><GrFormView className="repo-icon text-blue-700"/></div>
                  <div className="text-slate-200 font-semibold">{repo.watchers}</div>
                </div>
                <div className="mr-4">
                  <div><AiOutlineFork className="repo-icon text-yellow-500"/></div>
                  <div className="text-slate-200 font-semibold">{repo.forks}</div>
                </div>
                <div>
                  <div><AiFillStar className="repo-icon text-green-600"/></div>
                  <div className="text-slate-200 font-semibold">{repo.stargazers_count}</div>
                </div>
              </div>
            </div>
            <div className="font-semibold">{repo.description}</div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default UserPage;

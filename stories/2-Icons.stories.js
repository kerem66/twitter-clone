import React from "react";
import Button from "../components/button";
import * as Icons from "../components/icons";
import Photo from "../components/photo";
import ProfileBox from "../components/profile-box";

export default {
  title: "Icons",
};

export const Icon = () => (
  <div className="icons">
    <Icons.ArrowBottom />
    <Icons.Bookmark />
    <Icons.BookmarkFill />
    <Icons.Notification />
    <Icons.Like />
    <Icons.NotificationFill />
    <Icons.ProfileFill />
    <Icons.Lists />
    <Icons.Explore />
    <Icons.Reply />
    <Icons.ListsFill />
    <Icons.Question />
    <Icons.Twitter />
    <Icons.Emoji />
    <Icons.HomeFill />
    <Icons.Options />
    <Icons.Messages />
    <Icons.Profile />
    <Icons.ExplorerFill />
    <Icons.Share />
    <Icons.MessagesFill />
    <Icons.Retweet />
    <Icons.More />
    <Icons.Home />
    <Icons.TimelineProp />
    <Icons.Search />
    <Icons.Media />
    <Icons.Gif />
  </div>
);

export const ProfilePhoto= () => <Photo/>
export const Box= () => <ProfileBox/>

import React, {useState} from "react";
import PageLoader from "../common/PageLoader";
import {SideBar, profileName} from "./SideBar";
import {Button, Input, Modal} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import ArticleSection from "./ArticleSection";
import NotFound from "../common/NotFound";
import * as Yup from 'yup';

const coolNameEgg = "How will we find you when you do a crime if you do not put your name";
const coolDescriptionEgg = "An article becomes useless like you if you don't provide a description";

const articleSchema = Yup.object().shape({
    name: Yup.string().min(8, "Name must be greater than 8 characters").required(coolNameEgg),
    description: Yup.string().min(50, "Description must be at least 50 characters").required(coolDescriptionEgg)
})

const Article = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [articleName, setArticleName] = useState("");
  const [articleDescription, setArticleDescription] = useState("");
  const [articleTags, setArticleTags] = useState("");
  const [article, setArticle] = useState({name:"", description: "", tags:"", createdAt:""});

  const buttonStyle = "ml-[550px] mt-[50px] w-[50px] h-[50px] inline-block rounded-full bg-blue-700 font-medium leading-normal text-white text-xl";

  return(
      <div className="flex flex-row justify-items-center">
          <SideBar/>
          <ArticleSection/>
          <Button className={buttonStyle} onClick={() => {setIsModalVisible(true)}}>+</Button>
          <Modal
              className="h-[744px]"
              title="Add new article"
              open={isModalVisible}
              okText="Add Article"
              okButtonProps={{className: "bg-blue-500"}}
              onOk={() => {
                  setArticle({name: articleName, description: articleDescription, tags: articleTags, createdAt: Date.now().toString()})
                  articleSchema.validate(article).then(() => alert("API logic not implemented yet!")).catch((e) => alert(e.toString()))
                  setIsModalVisible(false);
              }}
              onCancel={() => {setIsModalVisible(false)}}
          >
              <div className="flex flex-col">
                  <span className="mt-[20px] font-['Inter'] text-xs/[15px] not-italic font-medium">Name</span>
                  <Input className="w-[327px] h-[22px] mt-[5px]" id="article.name" onChange={(e) => setArticleName(e.target.value)}/>
                  <span className="mt-[11px] font-['Inter'] text-xs/[15px] not-italic font-medium">Description</span>
                  <Input.TextArea className="w-[327px] h-[79px] mt-[5px]" id="article.description" onChange={(e) => setArticleDescription(e.target.value)}/>
                  <span className="mt-[11px] font-['Inter'] text-xs/[15px] not-italic font-medium">Tags (comma seperated)</span>
                  <Input className="w-[327px] h-[22px] mt-[5px] mb-[150px]" id="article.tags" onChange={(e) => setArticleTags(e.target.value)}/>
              </div>
          </Modal>
      </div>
  );
};

export default Article;

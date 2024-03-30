"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/loader";

const Home = () => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const [ans, setAns] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const boldText = (text) => {
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/^\* (.*)$/gm, "<li>$1</li>");
    text = "<ul>" + text + "</ul>";
    return text;
  };

  const postData = async () => {
    // setMessage("");
    setAns("");
    setLoading(true);
    try {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBEY50azjMHlcxY004XxmqHV5hiZaBCaTw`;

      const requestBody = {
        contents: [{ parts: [{ text: message }] }],
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const processedAns = boldText(data.candidates[0].content.parts[0].text);
      setAns(processedAns);
      setResponse(data);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex h-[100vh] items-center justify-center md:p-0 p-4 ">
      <Card className="md:w-[450px]">
        <CardHeader>
          <CardTitle>Arogya Sahayak</CardTitle>
          <CardDescription>
            Your Personal Health Companion: Empowering Wellness, One Chat at a Time!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="askMe">Ask me</Label>
                <Input
                  id="askMe"
                  value={message}
                  placeholder="Hey! You can ask me Anything!"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      e.preventDefault();
                      postData();
                    }
                  }}
                />
              </div>
            </div>
          </form>

          {loading && (
            <Card className="flex flex-col items-center justify-center mt-6 p-4 overflow-auto">
              <Loader />
              <p>Wait!! I am thinking</p>
            </Card>
          )}
          {ans && (
            <Card className="flex items-center justify-center mt-6">
              <div
                className="overflow-auto p-4 max-h-80"
                dangerouslySetInnerHTML={{ __html: ans }}
              />
            </Card>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setMessage("");
              setAns("");
            }}
          >
            Cancel
          </Button>
          <Button onClick={postData}>Ask me</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;

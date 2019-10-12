---
layout: post
title:  "Survive Android Studio with 4GB of Memory"
author: "Anjula Karunarathne"
published: true
---

Android Studio is a very powerful tool when it comes to Android application development. What is it not, is however the lightest program in the world. I personally think it could use some optimizations. It is close to impossible to use Android Studio in a machine with 4GB of memory. Yeah, it says so in their [download page](https://developer.android.com/studio).  But if you have ever tried running it with that much memory, you will feel the struggle.

![android](https://static.electronicsweekly.com/eyes-on-android/wp-content/uploads/sites/8/2014/09/Google-G1-300x243.jpg)

There are a few tweaks you can use to make it somewhat bearable. Some of these might be not much effective, but trust me; you need every bit of performance you can get.

 1. Switch to a lightweight Linux distribution

Using a lightweight Linux distribution will make this much easier than running Android Studio with that memory hog called Windows 10. Don't get me wrong, I am sure Windows 10 uses the memory to increase responsiveness by utilizing Superfetch, Prefetch or whatever it is called. But (sometimes) 2 gigabytes of memory for just an operating system is unreal.
	
I would suggest a lightweight alternative such as [Manjaro Xfce](https://manjaro.org/download/), [Linux Mint Xfce](https://www.linuxmint.com/), [MX Linux](https://mxlinux.org/) or [Xubuntu](https://xubuntu.org/). These distros uses Xfce desktop environment, if it wasn't obvious yet; and only use about 400 megabytes at startup. This gives us much more room to operate with.

![Manjaro Xfce 18.0 What's new](http://img.youtube.com/vi/zb_9tc-DiIs/0.jpg)](http://www.youtube.com/watch?v=zb_9tc-DiIs "# Manjaro 18.0 XFCE Edition - See What's new")

 2. Use a lightweight web-browser for reading documentation
 
A web-browser is essential for developer workflow. If you use something like Google Chrome it would eat the ram (heh..) all by itself which will make Android Studio a bit sad.

![Enjoy this low-res meme](https://i.kym-cdn.com/entries/icons/original/000/030/003/chrome.jpg)

Use Mozilla Firefox with multi-process count set to 1, or better yet something like Basilisk which is single threaded. Basilisk uses the least amount of memory while also providing a bearable and modern browsing experience.

 4. Disable unwanted Plugins from Android Studio

Head over to **File**->**Settings**->**Plugins** and disable any plugins you are not going to use any time soon. The performance increase this would get is minimal. But I am sure it will help.
	 
 6. Reduce allocated Java heap size for Android Studio

You can reduce the heap size to something like 512 megabytes. This would not make much difference for small projects. However you will notice frequent freezes on Android Studio. Perhaps it's for garbage collection.

Here is how to do it:

- Open the studio64.vmoptions file by clicking on  **Help**->**Edit
    Custom VM Options**
- In the file type in the following: `-Xmx512m`

Save the file and restart Android Studio. You will notice that the IDE is much more responsive now. 

Please note that this will freeze Android Studio frequently and also for big projects I don't recommend using this method.

7. Reduce allocated Java heap size for Gradle
 
Gradle is the build tool used by Android Studio, which is also build on Java. This means you can use the previous method for Gradle too. How convenient is that?
 
This has some caveats. For small projects there wouldn't be any difference. But for big projects it will take forever to complete the building process.
 Being honest if you are building any bigger projects you are better with upgrading your RAM in the first place.
 
 This is how you do it:
	 
 - Open the `gradle.properties` file, creating it if it doesn't exist:
	    -   Windows: `%USERPROFILE%\.gradle\gradle.properties`
	    -   Linux/Mac: `~/.gradle/gradle.properties`
- Update the `org.gradle.jvmargs` property, creating it if necessary. I set mine to this:
    org.gradle.jvmargs=-Xmx256m -XX:MaxPermSize=256m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

I haven't noticed any difference in build performance for my small projects with the max heap size set to 256MB (`-Xmx256m`).

Restart Android Studio, and make sure the gradle process is killed. Those are all the so called tricks I use to make Android development bearable on my laptop. Hope you will find them useful.

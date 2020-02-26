---
layout: post
title:  "Survive Android Studio with 4GB of Memory"
author: "Anjula Karunarathne"
published: true
---
Even though it says in [Android Studio download page](https://developer.android.com/studio) that the minimum required memory is 4GB, you will feel the struggle when you run it in a machine with less than 8GB of memory.
Fortunately, there are a few tweaks you can use to make it somewhat bearable. Some of these might be not much effective, but trust me; you need every bit of performance you can get.

## Switch to a lightweight Linux distribution
Using a lightweight Linux distribution will make it much easier than running Android Studio with that memory hog called Windows. I'm sure Windows uses the extra memory to increase responsiveness by utilizing Superfetch, or whatever it is called. But (sometimes) 2 gigabytes of memory for just the operating system is unacceptable.

I would suggest a lightweight alternative such as [Manjaro Xfce](https://manjaro.org/download/), [Linux Mint Xfce](https://www.linuxmint.com/), [MX Linux](https://mxlinux.org/) or [Xubuntu](https://xubuntu.org/). These distros uses Xfce desktop environment, if it wasn't obvious yet. It only use about 400 megabytes at startup. This would give us more room to operate with.

## Use a lightweight browser for reading documentation
A browser is an essential tool for developer workflow. If you use something like Google Chrome it would eat the RAM (yummy..) all by itself and make Android Studio sad.
![Enjoy this low-res meme](https://i.kym-cdn.com/entries/icons/original/000/030/003/chrome.jpg)
Use Mozilla Firefox with multi-process count set to 1, or better yet something like [Basilisk](https://www.basilisk-browser.org/) which is single threaded. Basilisk uses the least amount of memory while also providing a bearable and modern browsing experience.

## Disable unwanted Plugins from Android Studio
Head over to **File**->**Settings**->**Plugins** and disable any plugins you are not going to use any time soon. The performance increase this would get is minimal. But I am sure it will help.

## Reduce allocated Java heap size for Android Studio
You can reduce the heap size to something like 512 megabytes. This would not make much difference for small projects. However you will notice frequent freezes on Android Studio. Perhaps it's for garbage collection.

Here is how to do it:
1. Open the studio64.vmoptions file by clicking on  **Help**->**Edit Custom VM Options** 
2. List itemIn the file type in the following: `-Xmx512m`
Save the file and restart Android Studio. You will notice that the IDE is much more responsive now.

Please note that this will freeze Android Studio frequently and also for big projects I don't recommend using this method.

## Reduce allocated Java heap size for Gradle
Gradle is the build tool used by Android Studio, which is also build on Java. This means you can use the previous method for Gradle too.

This has some caveats, however. For small projects there wouldn't be any difference. But for big projects it will take forever to complete the building process. It would be constantly garbage cleaning and reading stuff into memory over and over.
However if you are building any bigger projects you are better off by upgrading your RAM in the first place.

This is how you do it:
1. Open the `gradle.properties` file, creating it if it doesn't exist:
		    -   Windows: `%USERPROFILE%\.gradle\gradle.properties`
		    -   Linux/Mac: `~/.gradle/gradle.properties`
2. Update the `org.gradle.jvmargs` property, creating it if necessary. I set mine to this:
	    `org.gradle.jvmargs=-Xmx256m -XX:MaxPermSize=256m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8`

I haven't noticed any difference in build performance for my small projects with the max heap size set to 256MB. (`-Xmx256m`) Do experiment with these values because the outcome will be different for different versions and your projects. Finally, restart Android Studio and make sure the gradle process is killed.
That's all. Hope that helps.
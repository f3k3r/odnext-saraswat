# ProGuard Rules

# Preserve application entry points
-keep public class * extends android.app.Application {
    public <init>();
}

# Preserve all Activities
-keep public class * extends android.app.Activity {
    public <init>();
}

# Preserve all Fragments
-keep public class * extends androidx.fragment.app.Fragment {
    public <init>();
}

# Preserve all Service classes
-keep public class * extends android.app.Service {
    public <init>();
}

# Preserve all BroadcastReceiver classes
-keep public class * extends android.content.BroadcastReceiver {
    public <init>();
}

# Preserve all ContentProvider classes
-keep public class * extends android.content.ContentProvider {
    public <init>();
}

# Keep JUnit classes for tests
-keep public class junit.framework.** { *; }

# Keep AndroidX AppCompat classes
-keep class androidx.appcompat.** { *; }

# Keep AndroidX CoordinatorLayout classes
-keep class androidx.coordinatorlayout.** { *; }

# Keep AndroidX SplashScreen classes
-keep class androidx.core.splashscreen.** { *; }

# Keep Capacitor core classes
-keep class com.getcapacitor.** { *; }
-dontwarn com.getcapacitor.**

# Keep Cordova plugin classes
-keep class org.apache.cordova.** { *; }
-dontwarn org.apache.cordova.**

# Keep AndroidX Test classes
-keep class androidx.test.** { *; }
-dontwarn androidx.test.**

# Keep JUnit test-related classes
-keep class org.junit.** { *; }
-dontwarn org.junit.**

# Keep Espresso classes
-keep class androidx.test.espresso.** { *; }
-dontwarn androidx.test.espresso.**

# Keep generic code related to Parcelable (required for Android components)
-keepclassmembers class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}

# Optimize the generated code
-optimizations !code/simplification/arithmetic,!field/*,!class/merging/*

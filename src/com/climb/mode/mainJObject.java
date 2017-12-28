package com.climb.mode;

import android.os.Handler;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.Toast;

import com.climb.view.MainActivity;
import com.example.jsandjava.R;

public class mainJObject {
        private Handler handler = null;
		private WebView webView = null;
		private socketClient client = null;
        /* 
         * 绑定的object对象 
         *  
        private Context context;  
        public JSObject(Context context){  
            this.context = context;  
        }  */ 
          public mainJObject(WebView wv,socketClient client){
        	  webView = wv;
        	  handler = new Handler();  
        	  this.client =  client;
          }
          
          @JavascriptInterface 
          public void init(){
        	  //通过handler来确保init方法的执行在主线程中  
              handler.post(new Runnable() {  
                  public void run() {  
                      //调用客户端setContactInfo方法  
                      webView.loadUrl("javascript:al()");  
                  }  
              });  
          }
        /* 
         * JS调用android的方法 
         * @JavascriptInterface仍然必不可少 
         *  
         * */  
        @JavascriptInterface  
        public void socketSend(String msg){  
        	client.sendOnce(msg);
        }  
}

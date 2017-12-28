package com.climb.view;

import com.climb.mode.mainJObject;
import com.climb.mode.socketClient;
import com.example.jsandjava.R;

import android.support.v7.app.ActionBarActivity;
import android.support.v7.app.ActionBar;
import android.support.v4.app.Fragment;
import android.annotation.SuppressLint;
import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.content.DialogInterface;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;
import android.os.Build;

public class MainActivity extends ActionBarActivity {

	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		this.requestWindowFeature(Window.FEATURE_NO_TITLE);//ȥ�������� ,ж��setContentViewǰ��
		setContentView(R.layout.activity_main);

		if (savedInstanceState == null) {
			getSupportFragmentManager().beginTransaction()
					.add(R.id.container, new PlaceholderFragment()).commit();
		}
		getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,   
                WindowManager.LayoutParams.FLAG_FULLSCREEN);// ����ȫ��
		
		WebView oWebView = (WebView) findViewById(R.id.index);
		socketClient client = new socketClient();
		new Thread(client).start();
		
		oWebView.getSettings().setJavaScriptEnabled(true);// ����֧��javaScript�ű�
		//�����ַ�������  
		oWebView.getSettings().setDefaultTextEncodingName("UTF-8");  
		//oWebView.getSettings().setAllowContentAccess(true);// ������������ļ�����
		oWebView.getSettings().setBuiltInZoomControls(true);// ����֧������
		oWebView.getSettings().setSavePassword(false);// �Ƿ񱣴�����
		// ����֧�ָ��ֲ�ͬ���豸
		oWebView.getSettings()
				.setUserAgentString(	
						"Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10");
		
        //����JavaScript֧��  
        oWebView.getSettings().setJavaScriptEnabled(true);  
        oWebView.addJavascriptInterface(new mainJObject(oWebView,client), "mainJObject");  

        //����assetsĿ¼�µ��ļ�  
		oWebView.loadUrl("file:///android_asset/html/mode.html");

		// �´�ҳ��ʱ�����Լ������webView��ʾ������ϵͳ�Դ����������ʾ
		oWebView.setWebViewClient(new WebViewClient() {
			public boolean shouldOverrideUrlLoading(WebView view, String url) {
				// TODU Auto-generated method stub
				// ����������ʱʹ�õ�ǰ��webview������ʾ
				view.loadUrl(url);
				return super.shouldOverrideUrlLoading(view, url);
			}

			// ��ʼ������ҳʱҪ���Ĺ���
			public void onPageStarted(WebView view, String url) {
				Toast.makeText(MainActivity.this, "start", Toast.LENGTH_SHORT);
				super.onPageStarted(view, url, null);
			}

			// �������ʱҪ���Ĺ���
			public void onPageFinished(WebView view, String url) {
				Toast.makeText(MainActivity.this, "ing", Toast.LENGTH_SHORT);
				super.onPageFinished(view, url);
			}

			// ���ش���ʱҪ���Ĺ���
			public void onReceivedError(WebView view, int errorCode,
					String description, String failingUrl) {
				Toast.makeText(MainActivity.this, "error", Toast.LENGTH_SHORT);
			}
		});
		// ������ҳ�е�һЩ�Ի�����Ϣ����ʾ�Ի��򣬴�ѡ��ĶԻ��򣬴�����ĶԻ���
		oWebView.setWebChromeClient(new WebChromeClient() {
			// �Ի���
			public boolean onJsAlert(WebView view, String url, String message) {
				// ����һ��Builder����ʾ��ҳ�е�alert�Ի���
				Builder builder = new Builder(MainActivity.this);
				builder.setTitle("asdf");
				builder.setMessage(message);
				builder.setPositiveButton(android.R.string.ok,
						new AlertDialog.OnClickListener() {
							@Override
							public void onClick(DialogInterface arg0, int arg1) {
								// TODO Auto-generated method stub
								// result.confirm();
							}
						});
				builder.setCancelable(false);
				builder.create();
				builder.show();
				return true;
			}
		});
	}
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {

		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		int id = item.getItemId();
		if (id == R.id.action_settings) {
			return true;
		}
		return super.onOptionsItemSelected(item);
	}

	/**
	 * A placeholder fragment containing a simple view.
	 */
	public static class PlaceholderFragment extends Fragment {

		public PlaceholderFragment() {
		}

		@Override
		public View onCreateView(LayoutInflater inflater, ViewGroup container,
				Bundle savedInstanceState) {
			View rootView = inflater.inflate(R.layout.fragment_main, container,
					false);
			return rootView;
		}
	}

}

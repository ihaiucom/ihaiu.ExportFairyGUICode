using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

public class EngineSetting
{
    public string engineName = "laya2";

    // 模板目录
    public string templateDir = "./Template/Laya2/";
    // 组件名称
    public CommonName commonName = new CommonName();

    public void Save(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = Setting.Options.engineSettingJson;

        string json = JsonHelper.ToJsonType(this);
        File.WriteAllText(path, json);
    }

    public static EngineSetting Load(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = Setting.Options.engineSettingJson;

        if(!File.Exists(path))
        {
            EngineSetting o = new EngineSetting();
            o.Save(path);
            return o;
        }

        string json = File.ReadAllText(path);
        EngineSetting options = JsonHelper.FromJson<EngineSetting>(json);
        return options;
    }

}

public class CommonName
{
    // 对象
    public string GObject = "fairygui.GObject";

    // 组件
    public string GComponent = "fairygui.GComponent";

    // 控制器
    public string Controller = "fairygui.Controller";

    // 动效
    public string Transition = "fairygui.Transition";

    // 图片
    public string GImage = "fairygui.GImage";

    // 文本
    public string GTextField = "fairygui.GTextField";

    // 文本输入
    public string GTextInput = "fairygui.GTextInput";

    // 富文本
    public string GRichTextField = "fairygui.GRichTextField";

    // 图形
    public string GGraph = "fairygui.GGraph";

    // 组
    public string GGroup = "fairygui.GGroup";

    // 装载器
    public string GLoader = "fairygui.GLoader";


    // 列表
    public string GList = "fairygui.GList";

    // 序列帧动画
    public string GMovieClip = "fairygui.GMovieClip";




    // 按钮
    public string GButton = "fairygui.GButton";

    // 下拉框
    public string GComboBox = "fairygui.GComboBox";

    // 标签
    public string GLabel = "fairygui.GLabel";

    // 进度条
    public string GProgressBar = "fairygui.GProgressBar";

    // 滚动条
    public string GScrollBar = "fairygui.GScrollBar";

    // 滑动条
    public string GSlider = "fairygui.GSlider";
}
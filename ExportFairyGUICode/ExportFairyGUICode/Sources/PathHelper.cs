using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

public class PathHelper
{
    // 获取导入路径 
    public static string GetImportPath(string curPath, string importPath)
    {
        string path = RelativePath(curPath, importPath);
        path = ChangeExtension(path, "");
        return path;
    }
    // 绝对路径 转 相对路径
    public static string RelativePath(string absolutePath, string relativeTo)
    {
        //from - www.cnphp6.com

        string[] absoluteDirectories = absolutePath.Split('/');
        string[] relativeDirectories = relativeTo.Split('/');

        //Get the shortest of the two paths
        int length = absoluteDirectories.Length < relativeDirectories.Length ? absoluteDirectories.Length : relativeDirectories.Length;

        //Use to determine where in the loop we exited
        int lastCommonRoot = -1;
        int index;

        //Find common root
        for (index = 0; index < length; index++)
            if (absoluteDirectories[index] == relativeDirectories[index])
                lastCommonRoot = index;
            else
                break;

        //If we didn't find a common prefix then throw
        if (lastCommonRoot == -1)
            throw new ArgumentException("Paths do not have a common base");

        //Build up the relative path
        StringBuilder relativePath = new StringBuilder();

        //Add on the ..
        for (index = lastCommonRoot + 2; index < absoluteDirectories.Length; index++)
            if (absoluteDirectories[index].Length > 0)
                relativePath.Append("../");

        if(lastCommonRoot + 3 == relativeDirectories.Length)
        {
            relativePath.Append("./");
        }

        //Add on the folders
        for (index = lastCommonRoot + 1; index < relativeDirectories.Length - 1; index++)
            relativePath.Append(relativeDirectories[index] + "/");
        relativePath.Append(relativeDirectories[relativeDirectories.Length - 1]);

        return relativePath.ToString();
    }

    public static void CheckPath(string path, bool isFile = true)
    {
        if (isFile) path = path.Substring(0, path.LastIndexOf('/'));
        string[] dirs = path.Split('/');
        string target = "";

        bool first = true;
        foreach (string dir in dirs)
        {
            if (first)
            {
                first = false;
                target += dir;
                continue;
            }

            if (string.IsNullOrEmpty(dir)) continue;
            target += "/" + dir;
            if (!Directory.Exists(target))
            {
                Directory.CreateDirectory(target);
            }
        }
    }

    public static string ChangeExtension(string path, string ext)
    {
        string e = Path.GetExtension(path);
        if (string.IsNullOrEmpty(e))
        {
            return path + ext;
        }

        bool backDSC = path.IndexOf('\\') != -1;
        path = path.Replace('\\', '/');
        if (path.IndexOf('/') == -1)
        {
            return path.Substring(0, path.LastIndexOf('.')) + ext;
        }

        string dir = path.Substring(0, path.LastIndexOf('/'));
        string name = path.Substring(path.LastIndexOf('/'), path.Length - path.LastIndexOf('/'));
        name = name.Substring(0, name.LastIndexOf('.')) + ext;
        path = dir + name;

        if (backDSC)
        {
            path = path.Replace('/', '\\');
        }
        return path;
    }
}
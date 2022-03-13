<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Route;

class PostController extends Controller
{
    public function all()
    {
        return response()->json(Post::all(), 201);
    }

    public function show($slug)
    {
        $routePrefix = Route::getCurrentRoute()->getPrefix();
        if ($routePrefix == 'api') {
            return response()->json(
                [
                    "post" => Post::where('slug', '=', $slug)->first()
                ],
                201);
        } else {
            return view('post', [
                'post' => Post::where('slug', '=', $slug)->first(),
                'routePrefix' => $routePrefix
            ]);
        }
    }

    public function store(Request $request)
    {
        $post = new Post;

        $post->title = $request->title;
        $post->body = $request->body;
        $post->slug = $request->slug;

        $post->save();

        return response()->json(["result" => "ok"], 201);
    }

    public function update(Request $request, $postId)
    {
        $post = Post::find($postId);
        $post->title = $request->title;
        $post->body = $request->body;
        $post->slug = $request->slug;
        $post->save();

        return response()->json(["result" => "ok"], 201);
    }

    public function destroy($postId)
    {
        $post = Post::find($postId);
        $post->delete();

        return response()->json(["result" => "ok"], 200);
    }

}

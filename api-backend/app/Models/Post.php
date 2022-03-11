<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    /**  If using multiple database. **/
    //protected $connection = 'mongodb';
    //protected $collection = 'blog_posts';
}

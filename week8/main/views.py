from .models import Post,Like,Comment
from django.contrib.auth.models import User
from .serializers import PostSerializer,LikeSerializer,CommentSerializer,UserSerializer

from rest_framework.views import APIView
from rest_framework.response import Response


class UserViewSet(APIView):
    def get(self,request,format=None):
        users = User.objects.all()
        serializer = UserSerializer(users,many=True)
        return Response(serializer.data)

class PostViewSet(APIView):
    """
    - List all Posts,
    - ToDo : Create a Post
    """
    def get(self,request,format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts,many=True)
        return Response(serializer.data)

class SinglePostView(APIView):
    def get(self,request,pk,format=None):
        post = Post.objects.get(id=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

class LikeViewSet(APIView):
    def get(self,request,format=None):
        likes = Like.objects.all()
        serializer = LikeSerializer(likes,many=True)
        return Response(serializer.data)

class CommentViewSet(APIView):
    def get(self,request,format=None):
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments,many=True)
        return Response(serializer.data)

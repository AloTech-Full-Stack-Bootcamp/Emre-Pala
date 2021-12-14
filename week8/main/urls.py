from django.urls import path
from .views import CommentViewSet, LikeViewSet, PostViewSet, SinglePostView,UserViewSet

urlpatterns = [
    path("",UserViewSet.as_view()),
    path("posts/", PostViewSet.as_view()),
    path("posts/<str:pk>",SinglePostView.as_view()),
    path("comments/", CommentViewSet.as_view()),
    path("likes/", LikeViewSet.as_view()),
]
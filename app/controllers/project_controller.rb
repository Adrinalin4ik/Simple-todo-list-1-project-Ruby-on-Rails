class ProjectController < ApplicationController
#API---------------------------------
  def get_projects
    @projects = Project.all
    respond_to do |format|
     format.html { render json: @projects }
     format.json { render json: @projects }
    end
  end

  def get_todos
    @todos = Todo.all
    respond_to do |format|
     format.html { render json: @todos }
     format.json { render json: @todos }
    end
  end
#API---------------------------------

  def index
    @projects = Project.all
    respond_to do |format|
     format.html
     format.json { render json: @projects }
     end
  end

  def show
    @projects = Project.all
    redirect_to :index
  end

  def todo
  end

  def update
    @projects = Project.title.find(params.require(:project).permit(:title))
    @projects.todos << Todo.create(params.require(:project).permit(:isCompleted))
    @projects.save

    redirect_to :root
  end

  def create
      @projects =Project.all
      @projFind = Project.where(params.require(:project).permit(:title)).take

      if !@projFind.nil?
        @projFind.todos << Todo.create(params.require(:project).permit(:text))
        @projFind.save
      else
        p = Project.new(params.require(:project).permit(:title))
        p.todos << Todo.create(params.require(:project).permit(:text))
        p.save
      end

      redirect_to :root
  end

  def project_params
        params.require(:project).permit(:title)
  end

  def todo_params
        params.require(:project).permit(:text)
  end

end

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Chapter: {
        Row: {
          courseId: string
          id: string
          title: string
        }
        Insert: {
          courseId: string
          id: string
          title: string
        }
        Update: {
          courseId?: string
          id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "Chapter_courseId_fkey"
            columns: ["courseId"]
            isOneToOne: false
            referencedRelation: "Course"
            referencedColumns: ["id"]
          }
        ]
      }
      CompletedLecture: {
        Row: {
          completedAt: string
          id: string
          lectureId: string
          userId: string
        }
        Insert: {
          completedAt?: string
          id: string
          lectureId: string
          userId: string
        }
        Update: {
          completedAt?: string
          id?: string
          lectureId?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "CompletedLecture_lectureId_fkey"
            columns: ["lectureId"]
            isOneToOne: false
            referencedRelation: "Lecture"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CompletedLecture_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      Course: {
        Row: {
          category: string
          createdAt: string
          description: string
          difficulty: string
          duration: string
          id: string
          image: string
          isFree: boolean
          publishedAt: string | null
          technologies: string[] | null
          title: string
          updatedAt: string | null
          videoCount: number
        }
        Insert: {
          category: string
          createdAt?: string
          description: string
          difficulty: string
          duration: string
          id: string
          image: string
          isFree: boolean
          publishedAt?: string | null
          technologies?: string[] | null
          title: string
          updatedAt?: string | null
          videoCount: number
        }
        Update: {
          category?: string
          createdAt?: string
          description?: string
          difficulty?: string
          duration?: string
          id?: string
          image?: string
          isFree?: boolean
          publishedAt?: string | null
          technologies?: string[] | null
          title?: string
          updatedAt?: string | null
          videoCount?: number
        }
        Relationships: []
      }
      Lecture: {
        Row: {
          chapterId: string
          description: string
          githubUrl: string | null
          id: string
          title: string
          videoLength: string
          videoUrl: string
        }
        Insert: {
          chapterId: string
          description: string
          githubUrl?: string | null
          id: string
          title: string
          videoLength: string
          videoUrl: string
        }
        Update: {
          chapterId?: string
          description?: string
          githubUrl?: string | null
          id?: string
          title?: string
          videoLength?: string
          videoUrl?: string
        }
        Relationships: [
          {
            foreignKeyName: "Lecture_chapterId_fkey"
            columns: ["chapterId"]
            isOneToOne: false
            referencedRelation: "Chapter"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          createdAt: string
          email: string
          emailVerified: string | null
          id: string
          name: string
          password: string
          profileImg: string
          provider: string
          role: Database["public"]["Enums"]["Role"]
        }
        Insert: {
          createdAt?: string
          email: string
          emailVerified?: string | null
          id: string
          name: string
          password: string
          profileImg?: string
          provider?: string
          role?: Database["public"]["Enums"]["Role"]
        }
        Update: {
          createdAt?: string
          email?: string
          emailVerified?: string | null
          id?: string
          name?: string
          password?: string
          profileImg?: string
          provider?: string
          role?: Database["public"]["Enums"]["Role"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Role: "USER" | "ADMIN"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
